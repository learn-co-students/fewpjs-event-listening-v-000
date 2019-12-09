function addingEventListener() {
  // Take this code and paste it into the index.js file's addingEventListener function.
  // Let's review the parts of this code:
  // The node that will be doing the listening.
  // We store that node in the input constant
  const input = document.getElementById('input');
    // The invocation of addEventListener on the node that will be doing the listening
    // The first argument is the event name to listen for ('click')
    // The second argument is the callback function.
    // It's work that will be executed when the node "hears" the event
    input.addEventListener('click', function (event) {
       alert('I was clicked!');
    });

}
