import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App.component';

test('it should render', () => {
  const appElement = render(<App />);
  expect(appElement).toBeTruthy();
});
