const inputRef = document.querySelector('.task-4 > input');
const outputRef = document.querySelector('.task-4 > .output');

inputRef.addEventListener('blur', function (e) {
    let num = Number(e.target.value);

    setInterval(() => {
        let result = Math.pow(num,2);
        num = result;

        outputRef.textContent = result;
    }, 1000);
});