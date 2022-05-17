let spy;
let fn;

function receivesAFunction(callback) {    
    console.log(callback());
}

receivesAFunction(Spy);

function returnsANamedFunction() {
    return function fn(){

    }
}

function returnsAnAnonymousFunction() {
    return function(){
        
    }
}



