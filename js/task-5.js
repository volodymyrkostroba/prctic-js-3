const inputRef = document.querySelector('.task-5 > input');
const outputRef = document.querySelector('.task-5 > .output');
let isActivae = null;
let massege = 'отсчет окончен';



inputRef.addEventListener('blur', start);

function start(e){
    if(isActivae){
        console.log('no');
        return
    }

    let num = Number(e.target.value);


    intervalId = setInterval(() => {
        isActivae = true;
        num = num - 1;
        outputRef.textContent = num;

        if(num === 0){
            stop();
        }
    }, 1000);
}

function stop(){
    clearInterval(intervalId);
    
    isActivae = null;
    inputRef.value = '';
    

    return;
}

// ///////

