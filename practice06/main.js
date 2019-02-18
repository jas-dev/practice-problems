


var fibOutput= [];

function fibonacci(num){

    //debugger;

    var a= 0;
    var b= 1;
    var f= 1;
    fibOutput.push(a,b);
    for(var i=2; i< num; i++){

        f= a + b;
        a= b;
        b= f;

        fibOutput.push(f);


    }
    return fibOutput;
}



