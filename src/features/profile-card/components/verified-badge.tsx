import { ShieldCheck } from 'lucide-react';

type VerifiedBadgeProps = {
  isVerified: boolean;
};

export function VerifiedBadge({ isVerified }: VerifiedBadgeProps) {
  if (!isVerified) return null;
  return (
    <ShieldCheck
      className="absolute top-3 right-3 size-4 text-blue-500"
      data-testid="verified-badge"
    />
  );
}
