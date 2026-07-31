const FEATURED_CUTOFF_MONTH = 8; // August
const FEATURED_CUTOFF_DAY = 11;
const CHICAGO_TZ = 'America/Chicago';

// Returns today's calendar date as seen in America/Chicago, expressed as a
// UTC-midnight Date so day-level comparisons aren't affected by time-of-day
// or the server's own timezone.
function getChicagoToday(): Date {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: CHICAGO_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const year = Number(parts.find((p) => p.type === 'year')?.value);
  const month = Number(parts.find((p) => p.type === 'month')?.value);
  const day = Number(parts.find((p) => p.type === 'day')?.value);

  return new Date(Date.UTC(year, month - 1, day));
}

// 'B' on or before August 11, 'C' after — the swap happens automatically on
// the next site rebuild with no manual edit required.
export function getFeaturedCohort(): 'B' | 'C' {
  const today = getChicagoToday();
  const cutoff = new Date(Date.UTC(today.getUTCFullYear(), FEATURED_CUTOFF_MONTH - 1, FEATURED_CUTOFF_DAY));
  return today.getTime() <= cutoff.getTime() ? 'B' : 'C';
}

// Cohort A is permanently closed for enrollment as of now.
export function isCohortClosed(cohortLetter: string): boolean {
  return cohortLetter === 'A';
}
