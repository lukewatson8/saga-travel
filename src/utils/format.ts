export const getDate = (date: string) => {
    const setDate = new Date(date);
    
    return new Intl.DateTimeFormat('en-GB', {
    month: 'long', 
    year: 'numeric'
    }).format(setDate);
}

export const getCurrency = (currency: string) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: currency,
    })
    .formatToParts(0)
    .find(part => part.type === 'currency')?.value ?? '£';
}

export const getPrice = (price: number) => {
    const roundPrice = Math.floor(price);
    return Intl.NumberFormat('en-GB').format(roundPrice);
}

export const camelCaseFilters = (filters: Record<string, string>) => {
    return Object.entries(filters).reduce((acc, [key, value]) => {
        if (value) {
            const camelKey = key.charAt(0).toLowerCase() + key.slice(1);
            acc[camelKey + 's'] = value;
        }
        return acc;
    }, {} as Record<string, string>);
} 
