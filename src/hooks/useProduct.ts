import { useEffect, useState } from "react";
import { fetchProducts } from "../services/apiService";
import type { Product, ProductResponse } from "../types/product";

export const useProduct = (page: number, filters: Record<string, string>) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsError, setProductsError] = useState(false);
    const [productsTotalPages, setProductsTotalPages] = useState(1);

    useEffect(() => {
        setProductsLoading(true);
        setProductsError(false);

        if (page === 1) {
            setProducts([]);
        }

        fetchProducts(page, filters)
            .then((data: ProductResponse) => {
                setProducts(prev => page === 1 ? data.results : [...prev, ...data.results]);
                setProductsTotalPages(data.totalPages);
                setProductsError(false);
            })
            .catch(() => {
                setProductsError(true);
            })
            .finally(() => {
                setProductsLoading(false);
            });
    }, [page, filters])
    
    return { products, productsLoading, productsError, productsTotalPages };
}
