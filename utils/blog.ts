// ABOUTME: Helpers for rendering blog articles.
// ABOUTME: formatArticleDate turns an ISO date into a human-readable string.

/** Format an ISO date (yyyy-mm-dd) as e.g. "May 9, 2026", timezone-safe. */
export function formatArticleDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
