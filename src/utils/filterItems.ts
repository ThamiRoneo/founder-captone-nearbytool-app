import type { Item } from "../data/types.ts";
import type { ItemFilters } from "../types/app.ts";

export function filterItems(items: Item[], filters: ItemFilters): Item[] {
  return items.filter((item) => {
    // Removed listings should never appear, regardless of other filters.
    if (item.status === "removed") return false;

    if (filters.query.trim().length > 0) {
      const q = filters.query.trim().toLowerCase();
      const matchesTitle = item.title.toLowerCase().includes(q);
      const matchesDescription = item.description.toLowerCase().includes(q);
      if (!matchesTitle && !matchesDescription) return false;
    }

    if (filters.category !== "all" && item.category !== filters.category) {
      return false;
    }

    if (filters.price === "free" && item.price !== null) return false;
    if (filters.price === "paid" && item.price === null) return false;

    if (filters.maxDistanceKm !== null) {
      // An item with unknown distance can't be confirmed within range,
      // so it's excluded rather than guessed at when a distance cap is active.
      if (item.distanceKm === null || item.distanceKm > filters.maxDistanceKm) {
        return false;
      }
    }

    return true;
  });
}
