window.onload = function(){
    let button = document.getElementById('left').getElementsByTagName('button');
    for(let i = 0; i < button.length; i++){
        if(i <= 2){
            button[i].addEventListener('click',function(){
                window.location.assign(button[i].dataset.url);
            });
        }
    }

    let nav = document.getElementById('nav').getElementsByTagName('button');
    for(let i = 0; i < nav.length; i++){
        nav[i].addEventListener('click',function(){
            window.location.assign(nav[i].dataset.url);
        })
    }
}