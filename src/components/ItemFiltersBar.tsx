import type { ChangeEvent } from "react";
import type { Category } from "../data/types.ts";
import type { ItemFilters, PriceFilter } from "../types/app.ts";
import "./ItemFiltersBar.css";

const CATEGORY_OPTIONS: Array<{ value: Category | "all"; label: string }> = [
  { value: "all", label: "All categories" },
  { value: "power-tools", label: "Power tools" },
  { value: "hand-tools", label: "Hand tools" },
  { value: "garden", label: "Garden" },
  { value: "kitchen", label: "Kitchen" },
  { value: "outdoor", label: "Outdoor" },
  { value: "party", label: "Party" },
  { value: "other", label: "Other" },
];

const DISTANCE_OPTIONS: Array<{ value: string; label: string }> = [
  { value: "any", label: "Any distance" },
  { value: "1", label: "Within 1km" },
  { value: "5", label: "Within 5km" },
  { value: "10", label: "Within 10km" },
];

interface ItemFiltersBarProps {
  filters: ItemFilters;
  onChange: (filters: ItemFilters) => void;
  resultCount: number;
}

export function ItemFiltersBar({ filters, onChange, resultCount }: ItemFiltersBarProps) {
  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    onChange({ ...filters, query: event.target.value });
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange({ ...filters, category: event.target.value as Category | "all" });
  }

  function handlePriceChange(value: PriceFilter) {
    onChange({ ...filters, price: value });
  }

  function handleDistanceChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    onChange({ ...filters, maxDistanceKm: value === "any" ? null : Number(value) });
  }

  return (
    <div className="filters-bar">
      <div className="filters-bar__search">
        <label htmlFor="item-search" className="visually-hidden">
          Search items
        </label>
        <input
          id="item-search"
          type="search"
          placeholder="Search for a drill, ladder, mixer…"
          value={filters.query}
          onChange={handleQueryChange}
        />
      </div>

      <div className="filters-bar__row">
        <div className="filters-bar__field">
          <label htmlFor="category-filter">Category</label>
          <select id="category-filter" value={filters.category} onChange={handleCategoryChange}>
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filters-bar__field">
          <label htmlFor="distance-filter">Distance</label>
          <select
            id="distance-filter"
            value={filters.maxDistanceKm === null ? "any" : String(filters.maxDistanceKm)}
            onChange={handleDistanceChange}
          >
            {DISTANCE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filters-bar__field filters-bar__field--toggle" role="group" aria-label="Price">
          <span className="filters-bar__toggle-label">Price</span>
          <div className="filters-bar__toggle-group">
            {(["all", "free", "paid"] as PriceFilter[]).map((option) => (
              <button
                key={option}
                type="button"
                className={`filters-bar__toggle${filters.price === option ? " filters-bar__toggle--active" : ""}`}
                onClick={() => handlePriceChange(option)}
                aria-pressed={filters.price === option}
              >
                {option === "all" ? "All" : option === "free" ? "Free" : "Paid"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filters-bar__count" aria-live="polite">
        {resultCount} {resultCount === 1 ? "item" : "items"} nearby
      </p>
    </div>
  );
}
