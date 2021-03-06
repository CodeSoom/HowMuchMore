import { numToKorean, FormatOptions } from 'num-to-korean';

export function get(key) {
  return (obj) => obj[key];
}

export function isExist(object) {
  const keys = Object.keys(object);

  keys.shift();

  const nonExistingKey = [...keys].find((key) => !object[key]);

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

export function getPricePerPyeong({ price, pyeong }) {
  return translateNumericToKor(Math.floor(price / pyeong));
}
