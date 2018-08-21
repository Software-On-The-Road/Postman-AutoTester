function deepMap(obj, functor, parent) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(obj[key]) && !Array.isArray(obj[key])) {
        let currParent = parent ? parent + "." : "";
        currParent += key;
        functor(parent, key, "object");
        deepMap(obj[key], functor, currParent);
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