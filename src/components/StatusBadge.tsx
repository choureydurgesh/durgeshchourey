import type { Status } from '@/content/profile';

const styles: Record<Status, string> = {
  now: 'bg-mint text-mint-dark border-mint',
  done: 'text-mint border-mint/50',
  next: 'text-ink-muted border-night-line',
  planned: 'text-ink-muted border-night-line',
};
const labels: Record<Status, string> = { now: 'in progress', done: 'done ✓', next: 'next', planned: 'planned' };

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-xs ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
