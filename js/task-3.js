const sectionRef = document.querySelector('.task-3');

sectionRef.addEventListener('click', function (e) {
    let num = Math.pow(Number(e.target.textContent),2)

    e.target.textContent = num
});