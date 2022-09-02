function greaterNumber (input){
    let index = 0;
    let num = input[index];    
    let max = Number.MIN_SAFE_INTEGER;

    while(num!=="Stop"){
        num=Number(num);
        if (num>max){
            max=num;
        }
        num = input[index];
        index++;
    }
    console.log(max);
}
greaterNumber(["-1",
"-2",
"Stop"])





