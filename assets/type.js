var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('HELLO I AM NEERAJ KUMAR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('A PASSIONATE WEB DEVELOPER')
    .pauseFor(1500)
    .deleteAll()
    .typeString('A PYTHON ENTHUSIAST')
    .pauseFor(2500)
    .start();

    // the documentation can be found here : https://safi.me.uk/typewriterjs/ 
    // if there is any alteration and in css also updation can be done using div id = app