export interface ProductResponse {
    results: Product[];
    totalPages: number;
}

export interface ProductCard {
    product: Product
}

export interface Product {
    name: string;
    cmsUuid: string;
    images: ProductImage[];
    destinations: string[];
    holidayTypes: string[];
    departure: ProductDeparture;
    metaData: ProductMetaData;
}

export interface ProductImage {
    alt: string;
    filename: string;
}

export interface ProductMetaData {
    meals: string[];
}

export interface ProductDeparture {
    metaData: ProductDepartureMetaData;
    flights: ProductFlights;
    date: string;
    promotions: ProductPromotions[];
    groupPrice: ProductPrice;
}

export interface ProductDepartureMetaData {
    boardBasis: string;
    nights: string;
}

export interface ProductFlights {
    outbound: ProductOutbound;
}

export interface ProductOutbound {
    departurePoint: ProductDeparturePoint;
}

export interface ProductDeparturePoint {
    name: string;
}

export interface ProductPromotions {
    name: string;
}

export interface ProductPrice {
    price: number;
    wasPrice?: number; 
    currencyCode: string;
}
