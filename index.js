function addingEventListener() {
  //the node that will be doing the listening is stored inside input cnst
  const input = document.getElementById('input');
  //addEventListener is called on the node that will be doing the listening
  //'click' is the event name to listen fo
  //function(event) is the callback function. It's work that will be executed when the node "hears" the event.
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
    // in this case the work that is executed is that an alert box is triggered
  });
}
