var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('HELLO I AM NEERAJ KUMAR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('QUICK LEARNER')
    .pauseFor(1500)
    .deleteAll()
    .typeString('GOOD TEAM PLAYER')
    .pauseFor(1500)
    .deleteAll()
    // .typeString('DATA ANALYTICS ENTHUSIAST')
    // .pauseFor(1500)
    .start();

    // the documentation can be found here : https://safi.me.uk/typewriterjs/ 
    // if there is any alteration and in css also updation can be done using div id = app