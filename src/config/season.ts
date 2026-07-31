const DEADLINE_MONTH = 10; // October
const DEADLINE_DAY = 15;
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

function getDeadline(chicagoToday: Date): Date {
  return new Date(Date.UTC(chicagoToday.getUTCFullYear(), DEADLINE_MONTH - 1, DEADLINE_DAY));
}

export function isDeadlineSeasonActive(): boolean {
  const today = getChicagoToday();
  const deadline = getDeadline(today);
  return today.getTime() <= deadline.getTime();
}

export function daysUntilDeadline(): number {
  const today = getChicagoToday();
  const deadline = getDeadline(today);
  const diffMs = deadline.getTime() - today.getTime();

  if (diffMs <= 0) return 0;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
