const refs = {
    descs:document.querySelectorAll('.task-2 > p'),
    button:document.querySelector('.task-2 > button'),
}



refs.button.addEventListener('click', function (e) {
    let num = 0;
    
    refs.descs.forEach(element => {
        // console.log(Number(element.textContent));

        if(Number(element.textContent) > num){
            num = Number(element.textContent)
        }
    });

    console.log(num);
});