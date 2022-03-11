// Timeouts!
const logMessage = message => console.log(message);

logMessage("Hello World!");

setTimeout(() => {
    logMessage("Hello Again!")
}, 2000);

const waitForTimeouts = () => {
    logMessage("This runs when function is called");

    setTimeout(() => {
        logMessage("This runs after 3 seconds");

        setTimeout(() => {
            logMessage("This runs after 5 seconds");

            setTimeout(() => {
                logMessage("This runs after 6 seconds");
            }, 1000);
        }, 2000);
    }, 3000);
}

waitForTimeouts();




// Callbacks and Recursion!
const done = () => console.log("Job's done!!");

const countdown = (num, callback) => {
    if (num == 0) {
        callback();
    } else {
        console.log(num);

        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
    }
};

countdown(4, done);




// Promises :o
const lunchTime = true;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            const myLunch = {
                lunch: "pizza",
                drink: "coke"
            }

            resolve(myLunch)   
        } else {
            const lunchError = new Error("It's not lunchtime!");

            reject(lunchError)
        }
    })
}

orderMeSomeFood()
    .then(res => orderMeSomeFood(true))
    .then(res => console.log(res))
    .catch(err => console.log(err));
