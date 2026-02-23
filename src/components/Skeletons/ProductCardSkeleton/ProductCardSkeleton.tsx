import './ProductCardSkeleton.css'

export default function ProductCardSkeleton () {
    return (
        <>
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="product-card-container-skeleton">
                    <div className="product-card-content-container-skeleton animate-pulse">
                        <div className="product-card-images-skeleton"></div>
                        <div className="product-card-content-skeleton">
                            <div className="product-card-content-name-skeleton"></div>
                            <div className="product-card-destinations-skeleton"></div>
                            <div className="product-card-reviews-skeleton"></div>
                            <div className="product-card-listings-skeleton"></div>
                            <div className="product-card-listings-skeleton"></div>
                            <div className="product-card-listings-skeleton"></div>
                            <div className="product-card-listings-skeleton"></div>
                        </div>
                    </div>
                    <div className="product-card-price-skeleton">
                        <div className="product-card-price-inner-skeleton">
                            <p className="product-card-price-from-label-skeleton">From</p>
                            <div className="product-card-price-from-content-skeleton animate-pulse"></div>
                            <div className="product-card-price-button-container-skeleton">
                                <div className="button button-blue">Book now</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}