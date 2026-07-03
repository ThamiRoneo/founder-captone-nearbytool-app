import type { Price } from "../data/types.ts";

/** Formats a Price as "R50 / day". Caller must handle the null (free) case separately. */
export function formatPrice(price: Price): string {
  const rand = price.amountCents / 100;
  const amount = rand % 1 === 0 ? rand.toFixed(0) : rand.toFixed(2);
  return `R${amount} / ${price.period}`;
}

/** Formats distance for display. Caller must handle the null (unknown) case separately. */
export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)}m away`;
  }
  return `${distanceKm.toFixed(1)}km away`;
}

/**
 * Formats an ISO date as a relative "posted X ago" string.
 * This is the honest replacement for the fake "N people are viewing this"
 * counter — see DECISION-LOG.md. It's a real signal instead of a made-up one.
 */
export function formatPostedRelative(postedISO: string, now: Date = new Date()): string {
  const posted = new Date(postedISO);
  const diffMs = now.getTime() - posted.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Listed today";
  if (diffDays === 1) return "Listed yesterday";
  if (diffDays < 7) return `Listed ${diffDays} days ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks === 1) return "Listed 1 week ago";
  if (diffWeeks < 5) return `Listed ${diffWeeks} weeks ago`;
  const diffMonths = Math.floor(diffDays / 30);
  return diffMonths <= 1 ? "Listed 1 month ago" : `Listed ${diffMonths} months ago`;
}
