const items = document.querySelector('.task-4');
let isClicked = false;

items.addEventListener('click', function (e) {
    if(isClicked){
        minus(e);

        return;
    }
    
    plus(e);
 
});

function plus(e){
    
    e.target.height = e.target.height * 2;
    isClicked = true;

    console.log(isClicked);
}

function minus(e){
    e.target.height =  e.target.height / 2;
    isClicked = false;

    console.log(isClicked);
}