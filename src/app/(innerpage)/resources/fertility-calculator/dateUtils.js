export function parseDateInputToLocalNoon(value) {
  // value is "YYYY-MM-DD" from <input type="date" />
  if (!value) return null;
  const [y, m, d] = value.split('-').map((n) => Number(n));
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d, 12, 0, 0, 0);
}

export function formatDateHuman(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function addDays(date, days) {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + Number(days));
  return d;
}

export function diffDays(a, b) {
  // a - b in whole days
  const ms = a.getTime() - b.getTime();
  return Math.floor(ms / 86400000);
}

export function getTrimesterByGestationalWeeks(weeks) {
  if (weeks <= 13) return 'First trimester';
  if (weeks <= 27) return 'Second trimester';
  return 'Third trimester';
}

