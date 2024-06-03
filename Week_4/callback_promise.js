function getUserPosts(userId, callback) {
    setTimeout(() => {
        const posts = ['Post 1', 'Post 2'];
        callback(posts);
    }, 1500);
}

// Callback hell scenario. a deeply nested callback
// user info is stored in userInfo?
getuserInfo(1, (userInfo) => {
    console.log('User Info:', userInfo);

    getUserPosts(1, (userPosts) => {
        console.log('User Posts:', userPosts);
    
        // Display user info and posts on the web page
        // This is where you would typically update the UI
    });
});


// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Asychronous operation goes here 
    // e.g. HTTP requests 
    // If successful, call resolve with the result
    // If an error occurs, call reject with an error
});

myPromise.then(
    (result) => {
        // Handle the successful result
    },
    (error) => {
        // Handle the error
    }
);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Create a callback using promises
function getUserInfo(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userInfo = {name:'1', email:'2'};
            resolve(userInfo);
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        const userPosts = ['Post 1', 'Post 2'];
        resolve(userPosts);
    }, 1000);
}

getUserInfo(1)
    .then((userInfo) => {
        console.log('User Info: ', userInfo);
        return getUserPosts(1);
    })
    .then((userPosts) => {
        console.log('User posts:', userPosts);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
