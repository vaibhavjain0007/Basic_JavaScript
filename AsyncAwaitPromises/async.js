console.log('start');

// Promises
const getTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Ticket recieved');
    });
}

const getPopcorn = () => new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'Got popcorn');
    });

const getColdDrink = () => new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Got ColdDrink');
    });

getTicket().then((res) => {
    console.log(res);
    return getPopcorn();
})
.then(Promise.all([getPopcorn(), getColdDrink()])
.then((values) => {
    console.log(values);
}));

// Async await
async function getTicket2() {
    const ticket = await new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = true;
            if (condition) {
                resolve('Ticket mil gyi h');
            } else {
                reject('chlo next time dekhte h');
            }
        }, 1000);
    });

    const popcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = true;
            if (condition) {
                resolve('popcorn mil gye');
            } else {
                reject('No popcorn no movie');
            }
        })
    })

    const coldDrink = new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = true;
            if (condition) {
                resolve('coldDrink mil gyi');
            } else {
                reject('No coldDrink no movie');
            }
        })
    })

    Promise.all([popcorn, coldDrink]).then((values) => {
        console.log(...values);
        console.log('chlo ab chlte h andar');
    })
    return ticket;
}
console.log(getTicket2().then((res) => console.log(res)));

console.log('end');