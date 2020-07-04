const input = document.querySelector('input');

function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
      alert('I was clicked!');
    });
}