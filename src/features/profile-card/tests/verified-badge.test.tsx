import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VerifiedBadge } from '@/features/profile-card/components/verified-badge';

describe('VerifiedBadge', () => {
  it('should render nothing if the user is not verified', () => {
    render(<VerifiedBadge isVerified={false} />);
    expect(screen.queryByTestId('verified-badge')).toBeNull();
  });

  it('should render the badge if the user is verified', () => {
    render(<VerifiedBadge isVerified={true} />);
    expect(screen.getByTestId('verified-badge')).toBeInTheDocument();
  });
});
