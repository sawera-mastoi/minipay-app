import { render, screen } from '@testing-library/react';
import { Badge } from '../components/ui';
import { describe, it, expect } from 'vitest';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeDefined();
  });
});
