import axios from "axios";
import type { ProductResponse } from "../types/product";
import type { FilterResponse } from "../types/filter";
import { camelCaseFilters } from "../utils/format";

const client = axios.create({
    baseURL: '/api'
})

export const fetchProducts = async (page: number, filters: Record<string, string>): Promise<ProductResponse> => {
    const camelFilters = camelCaseFilters(filters);
    const { data } = await client.get<ProductResponse>('/search/products', {
        params: {
            page,
            ...camelFilters
        }
    });
    return data;
}

export const fetchFilters = async (): Promise<FilterResponse> => {
    const { data } = await client.get<FilterResponse>('/search/facets');
    return data;
}