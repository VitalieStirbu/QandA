import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Page } from './Page';

afterEach(cleanup);

test('When the page component is rendered, it should the correct title and content', () => {
  const { getByText } = render(
    <Page title="Title test">
      <span>Test content</span>
    </Page>,
  );

  const title = getByText('Title test');
  expect(title).not.toBeNull();
  const content = getByText('Test content');
  expect(content).not.toBeNull();
});
