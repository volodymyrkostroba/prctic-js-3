const refs = {
    items: document.querySelector('.task-5'),
    toAdd: document.querySelector('.toAdd'),
}

refs.items.addEventListener('click', function (e) {
    if(e.target.tagName !== 'IMG'){
        refs.toAdd.src = '';
     }
        refs.toAdd.src = e.target.src;
    
        
});