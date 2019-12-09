function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', ouch);
}

function ouch(){
    console.log('Ouch');
}

addingEventListener();


