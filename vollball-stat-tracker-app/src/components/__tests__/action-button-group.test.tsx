import { render, screen } from '@testing-library/react';
import ActionButtonGroup from '../action-button-group';

describe('<ActionButtonGroup/>', () => {
  beforeEach(() => {
    render(<ActionButtonGroup title="Test Title" />);
  });

  test('should have a title', () => {
    const title = screen.getByRole('heading', {
      name: /test title/i,
    });

    expect(title.textContent).toBe('Test Title');
  });
});
