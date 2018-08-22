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
input.innerHTML = JSON.stringify(data, null, "\t");


var output = document.getElementById('outputTextArea');

function runConverter() {
  console.log("Parsing input...")
  const json = JSON.parse(input.value);
  console.log(json)
  console.log("Running deepmap...");
 
  const output = deepMap(json, postmanStrategy);

  console.log(output);
}
