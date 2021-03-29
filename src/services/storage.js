export function loadItem(key) {
  return localStorage.getItem(key);
}

export function saveItem(key, value) {
  localStorage.setItem(key, value);
}
