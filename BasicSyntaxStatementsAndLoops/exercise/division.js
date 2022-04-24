function number(num){
    let numb = Number(num);
    let isFound = false;
    while(!isFound){
        if(numb%10==0){
            console.log("The number is divisible by 10");
            break;
        }
        if(numb%7==0){
            console.log("The number is divisible by 7");
            break;
        }
        if(numb%6==0){
            console.log("The number is divisible by 6");
            break;
        }
        if(numb%3==0){
            console.log("The number is divisible by 3");
            break;
        }
        if(numb%2==0){
            console.log("The number is divisible by 2")
            break;
        }
        isFound=true;
        console.log("Not divisible")
    }

}
number(1)