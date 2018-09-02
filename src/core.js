function deepMap(obj, functor, parent, acumulator) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(obj[key]) && !Array.isArray(obj[key])) {
        let currParent = parent ? parent + "." : "";
        currParent += key;
        acumulator += ' \n' + functor(parent, key, "object");
        acumulator += deepMap(obj[key], functor, currParent, '');
      } else {
        acumulator += ' \n' + functor(
          parent,
          key,
          Array.isArray(obj[key]) ? "array" : typeof obj[key]
        );
      }
    }
  }
  return acumulator;
}

// Utils
const isObject = obj => obj != null && typeof obj === "object";