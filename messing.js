// when we pass on functions as an argument in another function
// never use brackets to pass the func in another func.
// adding means we are calling that function

// callbacks one use case is that may be the function we are passing is dependent on the parameter it gets from the function we are calling

// like getting user name based on the id present in the function


names = ["Neil", "Peter", "Sarah"];

function containsUserId(getName){
    const id = 2;

    res = getName(id);
    console.log('The name we got is', res);
}


containsUserId((id) => {
    return names[id];
});


// event loops and how asynchronous nature works in javascript ❓


/*
    javscript by default is not asynchronous, it is synchronous in nature because it is a single threaded language and can only execute code line by line

    How it executes the code ❓
        all the code is executed in js engine.
        js engine contains a call stack in which all calls are added line by line
        the first thing that is added in the call stack is GEC (Global Execution Context) responsible for executing tasks
        as the tasks are added they get executed and removed from call stack until EOL


    How to acheive asynchronous nature ❓
        unlike java, js don't have multithreading concept. Instead, it uses webapis to do the same
        the process is same it's just there are some functions provided by the browser like setTimeout(), setInteveral()....
        these functions are not executed by the call stack as these are browser functions
        instead webapis excute them parallely with the other synchronous tasks and when they are properly done they are pushed into callback queue and then ++ EVENT LOOP ++ comes into picture. Event loop extracts the functions from callback queue and push into callstack to get them executed.

        Now this implies, all the asynchronous tasks are executed after all the synchronous tasks are executed

*/


console.log("line 1");
console.log("line 2");

setTimeout(() => {   // a browser function not directly executed in call stack instead handled by callback queue
    console.log("line 3");
}, 5000)



console.log("line 4");