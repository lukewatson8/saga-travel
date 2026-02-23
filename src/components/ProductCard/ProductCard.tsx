import './ProductCard.css'
import type { ProductCard } from '../../types/product'
import { getDate, getCurrency, getPrice } from '../../utils/format'
import useFancybox from '../../hooks/useFancybox'

export default function ProductCard ({product}: ProductCard) {

    const [fancyboxRef] = useFancybox({
        Carousel: {
            Toolbar: {
                display: {
                    left: ["counter"],
                    middle: [],
                    right: ["close"],
                },
            },
        },
    });
    
    return (
        <div className="product-card-container">
            <div className="product-card-content-container">
                {product?.images[0]?.filename && (
                    <>
                        <div className="product-card-images" ref={fancyboxRef}>
                            <img src={product?.images[0]?.filename} alt={product?.images[0]?.alt}></img>
                            <a href={product?.images[0]?.filename} data-fancybox="gallery">
                                <button className="product-card-images-button">View all</button>
                            </a>
                            <div className="hidden">
                                {product?.images.map((image, index) => (
                                    <div key={image.filename}> 
                                        {index !== 0 && (
                                            <a href={image?.filename} data-fancybox="gallery">
                                                <img src={image?.filename} alt={image?.alt}></img>
                                            </a>
                                        )}
                                    </div>

                                ))}
                            </div>
                        </div>
                        
                    </>
                )}
                <div className="product-card-content">
                    {product?.name && (
                        <p className="product-card-content-name">{product?.name}</p>
                    )}
                    {product?.destinations.length > 0 && (
                        <div className="product-card-destinations">
                            {product?.destinations.map((destination, index) => (
                                <span key={destination}>{destination}{index < product?.destinations.length - 1 && "," }</span>
                            ))}
                        </div>
                    )}
                    <svg className="product-card-reviews" xmlns="http://www.w3.org/2000/svg" width="110" height="24" fill="none" viewBox="0 0 110 24"><path fill="#ffc038" d="M10.379 3.68a.691.691 0 0 1 1.242 0c.893 1.83 2.43 4.986 2.43 4.986l5.52.76a.686.686 0 0 1 .384 1.176c-1.476 1.41-4.017 3.842-4.017 3.842l.98 5.456a.689.689 0 0 1-1.006.727L11 18.013l-4.912 2.614a.689.689 0 0 1-1.006-.727l.98-5.456-4.016-3.842a.688.688 0 0 1 .384-1.176l5.52-.76zM74.379 3.68a.691.691 0 0 1 1.242 0c.893 1.83 2.43 4.986 2.43 4.986l5.52.76a.686.686 0 0 1 .384 1.176c-1.476 1.41-4.017 3.842-4.017 3.842l.98 5.456a.689.689 0 0 1-1.006.727L75 18.013l-4.912 2.614a.689.689 0 0 1-1.006-.727l.98-5.456-4.016-3.842a.688.688 0 0 1 .384-1.176l5.52-.76zM97.322 2.923a.754.754 0 0 1 1.356 0l2.65 5.44 6.022.829a.749.749 0 0 1 .419 1.283c-1.61 1.538-4.382 4.191-4.382 4.191l1.069 5.952a.751.751 0 0 1-1.097.793L98 18.56l-5.359 2.851a.751.751 0 0 1-1.097-.793l1.07-5.952-4.382-4.191a.75.75 0 0 1 .419-1.283l6.021-.829zM98 4.956V16.86l4.707 2.505-.951-5.236 3.851-3.662-5.314-.756zM32.379 3.68a.691.691 0 0 1 1.242 0c.893 1.83 2.43 4.986 2.43 4.986l5.52.76a.686.686 0 0 1 .384 1.176c-1.476 1.41-4.017 3.842-4.017 3.842l.98 5.456a.689.689 0 0 1-1.006.727L33 18.013l-4.912 2.614a.689.689 0 0 1-1.006-.727l.98-5.456-4.016-3.842a.688.688 0 0 1 .384-1.176l5.52-.76zM54.379 3.68a.691.691 0 0 1 1.242 0c.893 1.83 2.43 4.986 2.43 4.986l5.52.76a.686.686 0 0 1 .384 1.176c-1.476 1.41-4.017 3.842-4.017 3.842l.98 5.456a.689.689 0 0 1-1.006.727L55 18.013l-4.912 2.614a.689.689 0 0 1-1.006-.727l.98-5.456-4.016-3.842a.688.688 0 0 1 .384-1.176l5.52-.76z"/></svg>
                    <ul className="product-card-listings">
                        {product?.holidayTypes && (
                            <li>
                                {product?.holidayTypes[0] === 'Hotel Stays' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1e3282" fillRule="evenodd" d="M24 19v-7a.997.997 0 0 0-1-1H1a.997.997 0 0 0-1 1v7h1v-2h22v2zM5 10V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3V6a.997.997 0 0 0-1-1H3a.997.997 0 0 0-1 1v4z" clipRule="evenodd"/></svg>
                                ): (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" fill="none" viewBox="0 0 28 20"><path fill="#1e3282" d="M12.644 15.08c2.866-.662 4.539-1.241 3.246-3.682C11.958 3.971 14.848 0 19.001 0c4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889V20H10c0-2.745-.22-4.258 2.644-4.92M0 20h7.809c-.035-8.177 3.436-5.313 3.436-11.127C11.245 6.362 9.606 5 7.497 5c-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761C.121 16.74 0 17.65 0 19.227z"/></svg>
                                )}
                                <span>{product?.holidayTypes[0]}</span>
                            </li>
                        )}
                        {product?.metaData?.meals.length > 0 && (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1e3282" fillRule="evenodd" d="M17.995 13v8.5c0 .374.343.5.5.5a.5.5 0 0 0 .501-.5s.008-16.774 0-19.265C18.063 3.316 16.44 7.431 15.663 13zm.501 11c-1.203 0-2.501-.956-2.501-2.5v-6.501H13.45C13.586 10.941 15.892 0 19.188 0c1.007 0 1.801.811 1.807 1.845.01 1.348.001 19.655.001 19.655 0 1.378-1.122 2.5-2.5 2.5M10.647 0H4.332c-.28 1.447-1.071 5.458-1.309 7.853-.207 2.084 1.016 3.03 1.709 3.55.147.117.265.294.265.482C5 13.48 5 20.172 5 21.476 5 22.867 5.98 24 7.552 24 9.005 24 10 22.861 10 21.476v-9.538c0-.19.102-.369.251-.486.723-.531 1.991-1.464 1.755-3.638-.259-2.383-1.074-6.393-1.359-7.814M9.171 2s.616 3.909.847 6.029c.13 1.212-.559 1.494-1.152 1.964-.791.626-.866 1.186-.866 1.771v9.609c0 .299-.09.627-.506.627S7 21.654 7 21.373v-9.615c0-.574-.042-1.143-.828-1.773-.581-.466-1.275-.769-1.159-1.935.211-2.114.774-6.05.774-6.05h.476v5h.817l.139-5h.524l.123 5h.835l-.033-5z" clipRule="evenodd"/></svg>
                                <span className="product-card-li-span">
                                    {product?.metaData?.meals?.map((meal, index) => (
                                        <span key={meal}>{meal}{index > 0 && index < product?.metaData?.meals.length - 1 && "," }</span>
                                    ))}
                                </span>
                            </li>
                        )}
                        {product?.departure?.metaData?.boardBasis && product?.departure?.metaData?.boardBasis !== 'Multiple' && (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1e3282" fillRule="evenodd" d="M17.995 13v8.5c0 .374.343.5.5.5a.5.5 0 0 0 .501-.5s.008-16.774 0-19.265C18.063 3.316 16.44 7.431 15.663 13zm.501 11c-1.203 0-2.501-.956-2.501-2.5v-6.501H13.45C13.586 10.941 15.892 0 19.188 0c1.007 0 1.801.811 1.807 1.845.01 1.348.001 19.655.001 19.655 0 1.378-1.122 2.5-2.5 2.5M10.647 0H4.332c-.28 1.447-1.071 5.458-1.309 7.853-.207 2.084 1.016 3.03 1.709 3.55.147.117.265.294.265.482C5 13.48 5 20.172 5 21.476 5 22.867 5.98 24 7.552 24 9.005 24 10 22.861 10 21.476v-9.538c0-.19.102-.369.251-.486.723-.531 1.991-1.464 1.755-3.638-.259-2.383-1.074-6.393-1.359-7.814M9.171 2s.616 3.909.847 6.029c.13 1.212-.559 1.494-1.152 1.964-.791.626-.866 1.186-.866 1.771v9.609c0 .299-.09.627-.506.627S7 21.654 7 21.373v-9.615c0-.574-.042-1.143-.828-1.773-.581-.466-1.275-.769-1.159-1.935.211-2.114.774-6.05.774-6.05h.476v5h.817l.139-5h.524l.123 5h.835l-.033-5z" clipRule="evenodd"/></svg>
                                <span>{product?.departure?.metaData?.boardBasis}</span>
                            </li>
                        )}
                        {product?.departure?.date && product?.departure?.metaData?.nights && (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g clipPath="url(#a)"><path fill="#1e3282" d="M17 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM5 3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm13 5v10H2V8zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2V2H6v1c0 1.103-.897 2-2 2s-2-.897-2-2V2H0v18h20zm4 3v19H2v-2h20V5zM7 12H5v-2h2zm4 0H9v-2h2zm4 0h-2v-2h2zm-8 4H5v-2h2zm4 0H9v-2h2zm4 0h-2v-2h2z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                                <span>{getDate(product?.departure?.date)} - {product?.departure?.metaData?.nights} nights</span>
                            </li>
                        )}
                        {product?.departure?.flights?.outbound?.departurePoint?.name && (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g clipPath="url(#a)"><path fill="#1e3282" fillRule="evenodd" d="M20.012 18v2h-20v-2zm3.973-13.118c.154 1.349-.884 2.615-1.927 3.491-.877.735-9.051 6.099-9.44 6.307-1.756.936-3.332 1.306-4.646 1.32-1.36.014-2.439-.354-3.144-.872L.044 11.151l3.742-2.373 4.203 1.445.984-.578L4 6l3.678-2.124 7.992 1.545c.744-.445 1.482-.9 2.225-1.348 1.049-.623 2.056-1.055 3.387-1.055 1.321 0 2.552.52 2.703 1.864m-4.341.512c-.419.192-3.179 1.882-3.615 2.144l-8.01-1.55-.418.241 5.288 3.307-4.683 2.876-4.214-1.448-.69.395c.917.729 1.787 1.522 2.751 2.186 1.472.962 4.344.22 5.685-.663.9-.592 7.551-4.961 8.436-5.582.605-.431 1.797-1.414 1.824-2.152l.001-.004c-.644-.287-1.716-.041-2.355.25" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                                <span>Departing from {product?.departure?.flights?.outbound?.departurePoint?.name}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="product-card-price">
                <div className="product-card-price-inner">
                    {product?.departure?.promotions.length > 0 && (
                        <p className="product-card-price-promotion">{product?.departure?.promotions[0].name}</p>
                    )}
                    {product?.departure?.groupPrice?.price && (
                        <>
                            <p className="product-card-price-from-label">From</p>
                            <p className="product-card-price-from-content"><strong>{getCurrency(product?.departure?.groupPrice?.currencyCode)}{getPrice(product?.departure?.groupPrice?.price)}pp</strong></p>
                        </>
                    )}
                    {product?.departure?.promotions.length > 0 && (
                        <p className="product-card-price-was-content">Was<strong> {getCurrency(product?.departure?.groupPrice?.currencyCode)}{getPrice(product?.departure?.groupPrice?.wasPrice ?? 0)}pp</strong></p>
                    )}
                    <div className="product-card-price-button-container">
                        <a className="button button-blue">Book now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
