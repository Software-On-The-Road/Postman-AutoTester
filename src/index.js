function postmanStrategy(parent, prop, type) {
  return (
    'pm.test("It should have ' +
    prop +
    ' property", function() {\n \t var jsonData = pm.response.json(); \n\t return pm.expect(jsonData.' +
    (parent ? parent + "." : "") +
    prop +
    ").to.exist.and.to.be.a('" +
    (type || "string") +
    "'); \n})"
  );
}

function deepMap(obj, functor, parent, acumulator) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isObject(obj[key]) && !Array.isArray(obj[key])) {
        let currParent = parent ? parent + "." : "";
        currParent += key;
        acumulator += " \n" + functor(parent, key, "object");
        acumulator += deepMap(obj[key], functor, currParent, "");
      } else {
        acumulator +=
          " \n" +
          functor(
            parent,
            key,
            Array.isArray(obj[key]) ? "array" : typeof obj[key]
          );
      }
    }
  }
  return acumulator;
}

const isObject = (obj) => obj != null && typeof obj === "object";

function runConverter() {
  let input = document.getElementById("inputTextArea");
  let json = JSON.parse(input.value);
  let result = deepMap(json, postmanStrategy, null, '');
  let output = document.getElementById("outputTextArea");
  output.innerHTML = result;
}

function clearTextArea() {
  document.getElementById("inputTextArea").value = "";
  document.getElementById("outputTextArea").value = "";
}

function copy() {
  let copyTextarea = document.getElementById("outputTextArea");
  copyTextarea.select();

  try {
    let successful = document.execCommand("copy");
    let msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
}

window.addEventListener('DOMContentLoaded', () => {

  const data = {
    user: {
      profile: {
        firstName: "John",
        lastName: "Dove",
        age: 26,
        title: "QA Engineer",
      },
      email: "john@softwareontheroad.com",
      emailVerified: true,
      rol: "admin",
      lastLogin: 1598756270257,
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
  let input = document.getElementById("inputTextArea");
  input.innerHTML = JSON.stringify(data, null, "\t");
})

window.addEventListener('DOMContentLoaded', () => {
  $("#button-generate-tests").on("click", runConverter);
  $('#button-copy').on('click', copy)
  $("#button-clear").on("click", clearTextArea);
})