import { filterObject } from '../utils/utils';

export function loadItem({ key, legacyKeys = '', newKeys = '' }) {
  const object = JSON.parse(localStorage.getItem(key));

  if (object?.[legacyKeys?.[0]]) {
    return filterObject({
      object,
      legacyKeys,
      newKeys,
    });
  }

  return object;
}

export function saveItem(key, value) {
  localStorage.setItem(key, value);
}
