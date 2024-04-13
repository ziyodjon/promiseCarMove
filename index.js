const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const car3 = document.querySelector('.car3');
const btn = document.querySelector('.btn');
const finish = document.querySelector('.finish');
let carMoveAudio = new Audio('mp3/carmove.mp3');
let carStopAudio = new Audio('mp3/carstop.mp3');


function createCar(carName,car,carSteps,msTime,finishSteps){
    const promise = new Promise((resolve,reject) => {

        btn.addEventListener('click',() =>{
            carMoveAudio.play();

            let moveTimer = setInterval(() => {
                carSteps++;
                car.style.left = `${carSteps}px`;
                
                if(carSteps === finishSteps){
                    carMoveAudio.pause();
                    carStopAudio.play();
                    clearInterval(moveTimer);
                    resolve([carName,carSteps]);
                    btn.setAttribute('disabled','');
                }

            },msTime);
        });


        
    });

    return promise;
}

let promise = createCar('Audi',car1,0,10,600);
let promise2 = createCar('BMW',car2,0,10,700);
let promise3 = createCar('BYD',car3,0,10,850);

Promise.all([promise,promise2,promise3]).then(datas => {
    for(let i = 0; i <= datas.length; i++){
        let carResEl = document.createElement('div');
        carResEl.classList.add('carmoveresult'); 
        const carName = datas[i][0];
        const carDist = datas[i][1];
        const AllCarsResult = `Машина ${carName} закончил свой путь и проехала ${carDist} метров`;
        carResEl.append(AllCarsResult);
        finish.append(carResEl);
    }
})


// promise.then((steps) => {
//     const info = `Первая машина закончил свой путь и проехала ${steps} метров`;
//     car1.append(info);
//     carStop();
//     console.log('Promise DONE');
// });

// promise2.then((steps) => {
//     const info = `Вторая машина закончил свой путь и проехала ${steps} метров`;
//     car2.append(info);
//     carStop();
//     console.log('Promise DONE');
// });

// promise3.then((steps) => {
//     const info = `Третья машина закончил свой путь и проехала ${steps} метров`;
//     car3.append(info);
//     carStop();
//     console.log('Promise DONE');
// });