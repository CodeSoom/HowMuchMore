import { renderHook } from '@testing-library/react-hooks';

import useLink from './useLink';

describe('useLink', () => {
  it('redirects users to provided url', () => {
    const { result } = renderHook(() => useLink());

    expect(result.current.goTo).toEqual(expect.any(Function));
    expect(result.current.goBack).toEqual(expect.any(Function));
  });
});
