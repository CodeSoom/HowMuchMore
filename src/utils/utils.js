export function get(key) {
  return (obj) => obj[key];
}

export function isExist(object) {
  const keys = Object.keys(object);

  const nonExistingKey = keys.find((key) => !object[key]);

  return (!nonExistingKey);
}
