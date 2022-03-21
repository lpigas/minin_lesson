// setTimeout(() =>{
//     console.log(`Request data....`);
// },1000)



// // setTimeout(() =>{
// //     console.log(`Preparing data ...`);

// //     const backendData = {
// //         server: `aws`,
// //         port: 2000,
// //         status: `working`
// //     }

// //     setTimeout(()=>{
// //         backendData.modified  = true;
// //         console.log(`Data received`, backendData)
// //     }, 2000);

// // }, 2000);


// const promix = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log(`Preparing data ...`);
//         const backendData = {
//                     server: `aws`,
//                     port: 2000,
//                     status: `working`
//                 }
//         resolve(backendData)
//     }, 2000);
// })
// promix.then( serverData =>{
//         return promix2 = new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 serverData.modified  = true;
//                 resolve(serverData)
//                     }, 1000);
//         })
// }).then(serverData =>{
//     return serverData
// }).then(lastData =>{
//     lastData.pixar = false;
//     console.log(`Data Reserved :`, lastData)
// }).catch(err => console.error(`error`, err))
// .finally(()=>{
//     console.log(`End operation`)
// })

const sleep = ms =>{
    return new Promise(resolve =>{
        setTimeout(()=>resolve(), ms)
    })
}

// sleep(2000).then(()=> console.log(`asdasdasd`))


Promise.all([sleep(2000), sleep(5000)]).then (()=> {
    console.log('end')
})
Promise.race([sleep(2000), sleep(5000)]).then (()=> {
    console.log('endinng')
})
// отсрочки - работают как асинхронность но есть возможность постепенного изменения 
