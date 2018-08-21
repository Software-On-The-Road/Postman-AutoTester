function deepMap(obj, parent, functor) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(obj[key]) && !Array.isArray(obj[key])) {
        let currParent = parent ? parent + "." : "";
        currParent += key;
        functor(parent, key, "object");
        deepMap(obj[key], currParent, functor);
      } else {
        functor(
          parent,
          key,
          Array.isArray(obj[key]) ? "array" : typeof obj[key]
        );
      }
    }
  }
  return;
}

// Utils
const isObject = obj => obj != null && typeof obj === "object";

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

deepMap(data, null, console.log);