var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('NEERAJ KUMAR')
    .pauseFor(2500)
    .deleteAll()
    .typeString('A MCA PERSUER')
    .pauseFor(2500)
    .start();

    // the documentation can be found here : https://safi.me.uk/typewriterjs/ 
    // if there is any alteration and in css also updation can be done using div id = app