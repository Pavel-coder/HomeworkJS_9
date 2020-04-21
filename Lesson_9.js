//
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання.
//     Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
//     Або йдучи на обід ви забули гаманець і лишились голодні.

//
// function wakeUp (ring, cb){
//     setTimeout(()=> {
//         if(ring){
//             cb(null, 'Wake Up')
//         }
//         else {
//             cb('You are oversleeping');
//         }
//     }, 2000)
// };
//
// function breakfast (meal, cb){
//     setTimeout(()=> {
//         if(meal){
//             cb(null,'You have a good breakfast')
//         }
//         else{
//             cb('You are will be hungry');
//         }
//
//     }, 1000)
// }
//
// function goWorking (drive, cb){
//     setTimeout(()=> {
//         if (drive){
//             cb(null,'Have a good road')
//         }
//         else {
//             cb('You forgot your car key');
//         }
//     },3000);
//
// }
//
// function letsWorking (work, cb){
//     setTimeout(()=> {
//         if (work){
//             cb(null,'Good work')
//         }
//         else {
//             cb('You are bad worker');
//         }
//     },1000);
//
// }
//
// function coffeeTime (coffee, cb){
//     setTimeout(()=> {
//         if (coffee){
//             cb(null,'Good coffee')
//         }
//         else {
//             cb('You still work man');
//         }
//     },2000);
//
// }
//
// wakeUp(true, (err, ring) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(ring);
//         breakfast (true, (err, meal) => {
//             if (err){
//                 console.log(err);
//             }
//             else {
//                 console.log(meal);
//                 goWorking(true, (err, drive) => {
//                     if (err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log(drive);
//                         letsWorking(true, (err, work) => {
//                             if(err){
//                                 console.log(err)
//                             }
//                             else {
//                                 console.log(work);
//                                 coffeeTime(false, (err, coffee) =>{
//                                     if(err){
//                                         console.log(err);
//                                     }
//                                     else {
//                                         console.log(coffee);
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//
//     }
// });


//
// ЧЕРЕЗ ПРОМИСЫ

// function wakeUp (ring){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if(ring){
//                 resolve('Wake Up');
//             }
//             else {
//                 reject('You are oversleeping');
//             }
//         }, 2000)
//     });
// };
//
//
// function breakfast (meal){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if(meal){
//                 resolve('You have a good breakfast')
//             }
//             else{
//                 reject('You are will be hungry');
//             }
//
//         }, 1000)
//
//     });
//
// };
//
//
// function goWorking (drive){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if (drive){
//                 resolve('Have a good road')
//             }
//             else {
//                 reject('You forgot your car key');
//             }
//         },3000);
//     })
// }
//
// function letsWorking (work){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if (work){
//                 resolve('Good work')
//             }
//             else {
//                 reject('You are bad worker');
//             }
//         },1000);
//     })
// }
//
// function coffeeTime (coffee){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             if (coffee){
//                 resolve('Good coffee')
//             }
//             else {
//                 reject('You still work man');
//             }
//         },2000);
//     })
// }
//
// wakeUp(true)
//     .then((resolve)=>{
//         console.log(resolve);
//         return breakfast(true);
//     })
//     .then((resolve)=>{
//         console.log(resolve);
//         return goWorking(true)
//     })
//     .then((resolve)=>{
//         console.log(resolve);
//         return letsWorking(true)
//     })
//     .then((resolve)=>{
//         console.log(resolve);
//         return coffeeTime(false);
//     })
//     .then((resolve)=>{
//         console.log(resolve);
//     })
//     .catch((reject)=>{
//         console.log(reject);
//     })


