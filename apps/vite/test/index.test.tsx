import { describe, it, assert } from 'vitest'
import { render } from '@testing-library/react';

import App from '../src/App';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    assert.ok(baseElement)
  });
});
