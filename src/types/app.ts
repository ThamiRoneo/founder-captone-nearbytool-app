import type { Category } from "../data/types.ts";

export type PriceFilter = "all" | "free" | "paid";

export interface ItemFilters {
  query: string;
  category: Category | "all";
  price: PriceFilter;
  /** null = no distance cap applied */
  maxDistanceKm: number | null;
}

export const DEFAULT_FILTERS: ItemFilters = {
  query: "",
  category: "all",
  price: "all",
  maxDistanceKm: null,
};
