// this function passes the tests but it does nothing inside the browser

function addingEventListener() {

const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
 }
