import { numToKorean, FormatOptions } from 'num-to-korean';

export function get(key) {
  return (obj) => obj[key];
}

export function isExist(object) {
  const keys = Object.keys(object);

  const nonExistingKey = keys.find((key) => {
    if (typeof object[key] === 'boolean') {
      return object[key];
    }
    return !object[key];
  });

  return (!nonExistingKey);
}

export function filterObject({ object, legacyKeys, newKeys }) {
  const temporary = { ...object };

  legacyKeys.forEach((key) => {
    delete temporary[key];
  });

  const newObject = newKeys.reduce((accumulator, current) => {
    if (!accumulator[current]) {
      return {
        ...accumulator,
        [current]: 0,
      };
    }

    return accumulator;
  }, { ...temporary });

  return newObject;
}

export function convertToKRW(price) {
  return price.toLocaleString('ko-KR', {
    style: 'currency', currency: 'KRW',
  });
}

export function translateNumericToKor(price) {
  return numToKorean(parseInt(price, 10) * 10000, FormatOptions.MIXED);
}
