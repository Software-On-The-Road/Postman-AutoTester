var data = {
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
  var json = JSON.parse(input.value);
  console.log(json)
  console.log("Running deepmap...");
 
  var result = deepMap(json, postmanStrategy, null, '');

  output.innerHTML = result;
}



// buttom copy
var copyTextareaBtn = document.querySelector('.button__copy');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.form-control');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

// button undo
function undoTextArea() {
  document.execCommand("undo", false, null);
}