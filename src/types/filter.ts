export interface FilterItem {
    key: string;
}

export interface Facet {
    key: string;
    items: FilterItem[];
}

export interface FilterResponse {
    facets: Facet[]; 
}