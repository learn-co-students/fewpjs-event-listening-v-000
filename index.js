function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

addingEventListener();

// IIF Immediately Invoked Function
// (function() {
//   const input = document.getElementById('input');
//   input.addEventListener('click', function(event) {
//     alert('I was clicked!');
//   });
// })();
