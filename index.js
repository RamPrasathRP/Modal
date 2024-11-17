// variables

let openBtn = document.getElementById('open-btn');
let modalCointainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// EVENT LISTENERS

openBtn.addEventListener('click',function(){

    modalCointainer.style.display = 'block';

})

closeBtn.addEventListener('click',function(){

    modalCointainer.style.display = 'none';

})
// windows object is highest object in dom tree ....
//  we pass an event e into the function..
// if the user clicks any where in the screen ...
// the modalCointer.style.display = 'none';it changes the display property to none...


window.addEventListener('click',function(e){

    if(e.target === modalCointainer) {

        modalCointainer.style.display = 'none';

    }
})