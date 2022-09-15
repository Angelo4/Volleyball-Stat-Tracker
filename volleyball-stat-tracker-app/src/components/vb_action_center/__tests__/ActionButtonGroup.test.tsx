import { render, screen } from '@testing-library/react';
import ActionButtonGroup from '../ActionButtonGroup';

describe('<ActionButtonGroup/>', () => {
  describe('with points enabled', () => {
    beforeEach(() => {
      render(<ActionButtonGroup title='Test Title' pointEnabled />);
    });

    test('should have a title', () => {
      const title = screen.getByRole('heading', {
        name: /test title/i,
      });
      expect(title.textContent).toBe('Test Title');
    });

    test('should have a point button', () => {
      const pointButton = screen.getByRole('button', {
        name: /point/i,
      });
      expect(pointButton).toBeVisible();
    });
  });

  describe('without points enabled', () => {
    beforeEach(() => {
      render(<ActionButtonGroup title='Test Title' />);
    });

    test('should have a title', () => {
      const title = screen.getByRole('heading', {
        name: /test title/i,
      });
      expect(title.textContent).toBe('Test Title');
    });

    test("shouldn't have a point button", () => {
      const pointButton = screen.queryByText('Point');
      expect(pointButton).toBeNull();
    });
  });
});
