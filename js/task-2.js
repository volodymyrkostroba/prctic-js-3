const refs = {
    desc:document.querySelectorAll('.task-2 > .description'),
    button:document.querySelector('.task-2 > .button'),
}


document.addEventListener('click', function () {
    const arr =[];


    refs.desc.forEach(element => {
        arr.push(Number(element.textContent));

        
    });

    arr.sort((a, b) => a - b);

    
//    console.log(arr);

    
})

  








