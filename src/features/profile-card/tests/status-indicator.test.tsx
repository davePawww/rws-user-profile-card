import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { StatusIndicator } from '@/features/profile-card/components/status-indicator';

describe('StatusIndicator', () => {
  it('should show the correct status based on the isOnline prop', () => {
    render(<StatusIndicator isOnline={true} />);
    expect(screen.getAllByTestId('status-indicator')[0]).toHaveClass('border-[#39ff14]/40');

    render(<StatusIndicator isOnline={false} />);
    expect(screen.getAllByTestId('status-indicator')[1]).toHaveClass('border-gray-400/40');
  });
});
