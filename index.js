const car1 = document.querySelector('.car1');
const btn = document.querySelector('.btn');
const finish = document.querySelector('.finish');

function carMove(){
    let audio = new Audio('mp3/carmove.mp3');
    audio.play();
}


const promise = new Promise((resolve,reject) => {
    let carSteps = 0;
    
    btn.addEventListener('click',() =>{
        carMove();
        let moveTimer = setInterval(() => {
            carSteps++;
            car1.style.left = `${carSteps}px`;
            
            if(carSteps === 1000){
                
                
                clearInterval(moveTimer);
                resolve();
            }
        },10);
    });
    
});

promise.then(() => {
    finish.innerHTML = 'Car finished';
    console.log('Promise DONE');
});