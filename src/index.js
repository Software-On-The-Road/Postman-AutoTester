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

var input = document.getElementById('inputTextArea');
input.innerHTML = JSON.stringify(data);


var output = document.getElementById('outputTextArea');

function runConverter() {
  const json = JSON.parse(input.value, null, "\t");

  deepMap(json, null, postmanStrategy);
}
