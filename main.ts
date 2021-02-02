import * as moduleA from './moduleA'
import * as moduleB from './moduleB'

let mod_a = new moduleA.Module();
mod_a.name_ = "xiao";
mod_a.friends = ['aaa', 'bbb'];

console.log(mod_a);

console.log(moduleB.moduleB_var);

//Promise
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});


//Promise2
let promise = new Promise((resolve, reject) => {
    console.log("promise");
    resolve();
});

promise.then(function() {
    console.log("resolved.");
})

console.log("Hi!");
