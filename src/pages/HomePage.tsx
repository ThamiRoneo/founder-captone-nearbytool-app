import { useMemo, useState } from "react";
import { useItems } from "../hooks/useItems.ts";
import { filterItems } from "../utils/filterItems.ts";
import { DEFAULT_FILTERS } from "../types/app.ts";
import type { ItemFilters } from "../types/app.ts";
import { ItemCard } from "../components/ItemCard.tsx";
import { ItemFiltersBar } from "../components/ItemFiltersBar.tsx";
import "./HomePage.css";

export function HomePage() {
  const { items, isLoading, error } = useItems();
  const [filters, setFilters] = useState<ItemFilters>(DEFAULT_FILTERS);

  const filteredItems = useMemo(() => filterItems(items, filters), [items, filters]);

  return (
    <div className="home-page">
      <header className="home-page__intro">
        <h1>Borrow from your stoep</h1>
        <p>Find tools and equipment from people nearby, instead of buying your own.</p>
      </header>

      <ItemFiltersBar filters={filters} onChange={setFilters} resultCount={filteredItems.length} />

      {isLoading && (
        <p className="home-page__status" role="status">
          Loading items…
        </p>
      )}

      {error && (
        <p className="home-page__status home-page__status--error" role="alert">
          {error}
        </p>
      )}

      {!isLoading && !error && filteredItems.length === 0 && (
        <div className="home-page__empty">
          <p>No items match your search yet.</p>
          <p className="home-page__empty-hint">Try widening your distance or clearing a filter.</p>
        </div>
      )}

      {!isLoading && !error && filteredItems.length > 0 && (
        <ul className="home-page__grid">
          {filteredItems.map((item) => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
