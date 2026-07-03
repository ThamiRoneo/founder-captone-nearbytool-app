import { useEffect, useState } from "react";
import { fetchItems } from "../data/items.ts";
import type { Item } from "../data/types.ts";

interface UseItemsResult {
  items: Item[];
  isLoading: boolean;
  error: string | null;
}


export function useItems(): UseItemsResult {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchItems()
      .then((result) => {
        if (!cancelled) setItems(result);
      })
      .catch(() => {
        if (!cancelled) setError("Couldn't load items right now. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { items, isLoading, error };
}
