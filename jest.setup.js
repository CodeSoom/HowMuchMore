import '@testing-library/jest-dom';

const NOOP = () => {};
Object.defineProperty(window, 'scrollTo', { value: NOOP, writable: true });
