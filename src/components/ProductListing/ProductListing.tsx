import './ProductListing.css'
import ProductCard from '../ProductCard/ProductCard'
import { useProduct } from '../../hooks/useProduct'
import { useFilter } from '../../hooks/useFilter'
import { useState } from 'react'
import type { FilterItem } from '../../types/filter'
import NoProductsFound from '../NoProductsFound/NoProductsFound'
import FilterSkeleton from '../Skeletons/FilterSkeleton/FilterSkeleton'
import ProductCardSkeleton from '../Skeletons/ProductCardSkeleton/ProductCardSkeleton'
import ProductErrorState from '../ProductErrorState/ProductErrorState'

export default function ProductListing () {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const {products, productsLoading, productsError, productsTotalPages} = useProduct(currentPage, activeFilters);
    const {filters, filtersLoading} = useFilter();

    const loadMore = () => {
        setCurrentPage(prev => prev + 1);
    }

    const filterChange = (key: string, value: string) => {
        setCurrentPage(1);
        setActiveFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <>
            <div className="hero-container">
                <div className="hero-container-inner">
                    <div className="hero-container-card">
                        <div className="hero-container-card-inner">
                            <h1>Your dream holiday awaits...</h1>
                            {filtersLoading && (
                                <>
                                    <FilterSkeleton/>
                                    <FilterSkeleton/>
                                </>
                            )}
                            {filters !== null && filters?.length > 0 && (
                                <>
                                    {filters.map((filter) => {
                                        const id = `filter-${filter.key}`;
                                        return (
                                            <div key={filter.key}>
                                                <label htmlFor={id}>{filter?.key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                                <select id={id} onChange={(e) => filterChange(filter?.key, e.target.value)}>
                                                    <option value="">Select {filter?.key.replace(/([A-Z])/g, ' $1').trim()}</option>
                                                    {filter?.items.map((item: FilterItem) => (
                                                        <option key={item.key} value={item?.key}>{item?.key}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-listing-container">
                {productsLoading && currentPage === 1 && (
                    <div className="minus-margin-top">
                        <ProductCardSkeleton />
                    </div>
                )}
                {products !== null && products?.length > 0 && (
                    <>
                        {products?.map(product => (
                            <ProductCard key={product.cmsUuid} product={product} />
                        ))}
                        {productsLoading && currentPage > 1 && (
                            <ProductCardSkeleton />
                        )}
                        {!productsLoading && currentPage < productsTotalPages && (
                            <div className="product-listing-load-more">
                                <button className="button button-green" onClick={loadMore}>Load more</button>
                            </div>
                        )}
                    </>
                )}
                {!productsLoading && products.length == 0 && !productsError && (
                    <>
                        <NoProductsFound />
                    </>
                )}
                {!productsLoading && productsError && (
                    <>
                        <ProductErrorState />
                    </>
                )}
            </div>
        </>
    )
}
