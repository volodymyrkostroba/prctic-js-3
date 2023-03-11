const refs = {
    desc:document.querySelectorAll('task-1 > .description'),
    button:document.querySelector('.task-1 > .button'),
}


refs.button.addEventListener('click', function (e) {
    let num = 0;
    
   refs.desc.forEach(element => {
    num += 1;
    element.textContent = num;
   });

   
});

