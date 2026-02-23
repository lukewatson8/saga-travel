import { useEffect, useState } from "react";
import { fetchFilters } from "../services/apiService";
import type {FilterResponse, Facet } from "../types/filter";

export const useFilter = () => {
    const [filters, setFilters] = useState<Facet[]>([]);
    const [filtersLoading, setFiltersLoading] = useState(true);

    useEffect(() => {
        fetchFilters()
            .then((data: FilterResponse) => {
                const filters = data?.facets?.filter((item) =>
                    ['HolidayType', 'ProductType'].includes(item.key)
                ) || [];
                setFilters(filters);
                setFiltersLoading(false);
            })
            .catch(() => {
                setFiltersLoading(false);
            })
    }, [])
    
    return { filters, filtersLoading };
}
