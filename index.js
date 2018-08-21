function deepMap(obj) {
  if (isObject(obj) && !isArray(obj)) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        deepMap(obj[key]);
      }
    }
  } else {
    console.log('ai noc ', obj);
  }
}

// Utils
const isObject = obj => obj != null && typeof obj === 'object';

const isArray = obj => obj.constructor === Array;

const data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 5
    },
    h: 6
  },
  i: {
    j: {
      k: 7
    }
  }
};

deepMap(data);