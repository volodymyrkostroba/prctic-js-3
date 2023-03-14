const inputRef = document.querySelector('.task-1 > input');
const pRef = document.querySelector('.task-1 > p');

document.addEventListener('mouseup', function (e) {
    let text = window.getSelection().toString();

    inputRef.value = text;
});