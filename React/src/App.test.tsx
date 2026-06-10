import { render } from '@testing-library/react';
import App from './App.tsx';

test('renders the employees grid', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.dx-datagrid')).toBeTruthy();
});
