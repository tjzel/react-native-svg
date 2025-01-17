export function pickNotNil(object: { [prop: string]: unknown }) {
  const result: { [prop: string]: unknown } = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    }
  }
  return result;
}

export const idPattern = /#([^)]+)\)?$/;

export const getRandomNumber = () =>
  Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
