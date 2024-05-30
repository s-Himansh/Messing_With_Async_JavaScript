// callback hell


function getUsersFromTwitter(getTweets){
    // call some api and get users data
    names = ["Neil", "Peter", "Sarah"];

    getTweets(names);

    // return names;
}

function getUserThreads(name, getThreads){
    // some api will call

    const threads = ["message 1", "message 2", "message 3"];

    getThreads(threads);
    // return threads;
}

// console.log("line 1");

setTimeout(() => {
    getUsersFromTwitter((names) => {
        // console.log(names[0]);

        setTimeout(() => {
            getUserThreads(names[0], (threads) => {
                // console.log(threads);
            })
        }, 0);

    });
}, 0);

// console.log("line 2");

// this is like a like cycle first users, threads, maybe we need to get likes then we need to create another callback
// which'll create pyramid like structure 

// Promises came into picture in 2015 in ES6
// Promises are not by default asynchronous. If needed, they'll work synchronously



async function getUserFromTwitter(){

    const promise = new Promise((resolve, reject) => {
        // done some calls and got the result
        const userData = [{name : "Neil"}, {name : "Sarah"}];

        if (userData.length > 0){
            resolve(userData);
        }else{
            reject("Some error occurred in getting the users");
        }
    }); 

    return promise;
}

async function getPostsFromUser(){
    const promise = new Promise((resolve, reject) => {
        // done some calls and got some data
        const posts = [{post : "Fine day today"}, {post : "Tough day but survived"}];
        if (posts.length > 0){
            resolve(posts);
        }else{
            reject("Some error occurred in getting posts");
        }
    });

    return promise;
}



getUserFromTwitter()
.then((result) => {
    console.log(result);

    return getPostsFromUser();
})
.then((posts) => {
    console.log(posts);
})
.catch((error) => console.log(error.message));


// point is not how much code we need to write, it's a matter of how we are handling the data
// we can mimic the same without promised and async

function getUsers(successcb, failcb){
    // done some api calls
    const data = [{name : "Neil"}, {name : "Sarah"}];

    if (data.length > 0){
        successcb(data);
    }else{
        failcb("some error occured");
    }
}

function getUsersCity(name, successcb, failcb){
    // done some api calls
    const data = [{city : "LA"}, {city : "NYC"}];

    if (data.length > 0){
        successcb(data);
    }else{
        failcb("some error occured");
    }
}

setTimeout(() => {
    getUsers((data) => {
        console.log(data);
        setTimeout(() => {
            getUsersCity(data[0].name, (city) => {
                console.log(city);
            }, (error) => {
                console.log(error.message);
            });
        })
    },(error) => {
        console.log(error.message);
    })
}, 0);


/* 

    Promises are always handled in microtask queue
    and event loop always check microtask queue before callbackqueue 
    that's why it is much morw faster than the bunch of callbacks or setTimeout() even if the time is 0s

*/


// this function is by default asynchronous
// we just need to handle the promises
fetch('https://jsonplaceholder.typicode.com/posts')
.then((data) => {
    // console.log(data);
    return data.json();
})
.then((dataa) => {
    // console.log(dataa);
})
.catch((err) => console.log(err));