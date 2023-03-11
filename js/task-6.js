const refs = {
    plus:document.querySelector('.plus'),
    minus:document.querySelector('.minus'),
    result:document.querySelector('.result'),
}

refs.plus.addEventListener('click', plusOne);
refs.minus.addEventListener('click', minusOne);

function plusOne(){
let sum = Number(refs.result.textContent);
sum += 1;
refs.result.textContent = sum;

}

function minusOne(){
    let sum = Number(refs.result.textContent);
    
    if(sum === 0){
        return
    }

    sum -= 1;
    refs.result.textContent = sum;
    
    }