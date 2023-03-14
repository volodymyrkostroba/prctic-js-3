const listRef = document.querySelector('.task-3');
const outputRef = document.querySelector('.task-3 > .result');

let num = 0;

listRef.addEventListener('click', function (e) {
    if(e.target.nodeName !== 'P'){
        return
    }
    num += 1;

    outputRef.textContent = num;
});