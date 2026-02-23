import './FilterSkeleton.css'

export default function FilterSkeleton () {
    return (
        <div className="animate-pulse">
            <div className="filter-skeleton-content"></div>
            <div className="filter-skeleton-select"></div>
        </div>
    )
}