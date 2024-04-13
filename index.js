const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const car3 = document.querySelector('.car3');
const btn = document.querySelector('.btn');
const finish = document.querySelector('.finish');
let carMoveAudio = new Audio('mp3/carmove.mp3');
let carStopAudio = new Audio('mp3/carstop.mp3');

// function carMove(){
//     let audio = new Audio('mp3/carmove.mp3');
//     audio.play();
// }

function carStop(){
    let audio = new Audio('mp3/carstop.mp3');
    audio.play();
}

function createCar(car,steps,msTime,finishSteps){
    const promise = new Promise((resolve,reject) => {
        let carSteps = steps;
        
        btn.addEventListener('click',() =>{
            carMoveAudio.play();
            let moveTimer = setInterval(() => {
                carSteps++;
                car.style.left = `${carSteps}px`;
                
                if(carSteps === finishSteps){
                    clearInterval(moveTimer);
                    carMoveAudio.pause();
                    carStopAudio.play();
                    resolve(carSteps);
                }
            },msTime);
        });


        
    });

    return promise;
}

let promise = createCar(car1,0,10,300);
let promise2 = createCar(car2,0,10,500);
let promise3 = createCar(car3,0,10,750);



promise.then((steps) => {
    const info = `Первая машина закончил свой путь и проехала ${steps} метров`;
    car1.append(info);
    carStop();
    console.log('Promise DONE');
});

promise2.then((steps) => {
    const info = `Вторая машина закончил свой путь и проехала ${steps} метров`;
    car2.append(info);
    carStop();
    console.log('Promise DONE');
});

promise3.then((steps) => {
    const info = `Третья машина закончил свой путь и проехала ${steps} метров`;
    car3.append(info);
    carStop();
    console.log('Promise DONE');
});