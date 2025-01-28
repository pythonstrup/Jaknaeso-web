import { render, screen } from '@testing-library/react';
describe('root page test', () => {
  test('check title', () => {
    render(
      <>
        <h1>title</h1>
      </>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
