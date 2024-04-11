const car1 = document.querySelector('.car1');
const btn = document.querySelector('.btn');
const finish = document.querySelector('.finish');

function carMove(){
    let audio = new Audio('mp3/carmove.mp3');
    audio.play();
}

function carStop(){
    let audio = new Audio('mp3/carstop.mp3');
    audio.play();
}

function createCar(steps,msTime){
    const promise = new Promise((resolve,reject) => {
        let carSteps = steps;
        
        btn.addEventListener('click',() =>{
            carMove();
            let moveTimer = setInterval(() => {
                carSteps++;
                car1.style.left = `${carSteps}px`;
                
                if(carSteps === 750){
                    
                    clearInterval(moveTimer);
                    resolve();
                }
            },msTime);
        });


        
    });

    return promise;
}

let promise = createCar(0,10);


promise.then(() => {
    finish.innerHTML = 'Car finished';
    carStop();
    console.log('Promise DONE');
});