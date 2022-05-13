function login(username,){
    cont=0;
    let isFound=false;
    while(!isFound){
        count++;
        let guess = reverseStr(password);
        if(password.equals(guess)){
            console.log(`User ${password} logged in.`);
            isFound=true;
        }else{
            console.log("Incorrect password. Try again.")
        }
        if(count ==4){
            console.log(`User ${password} blocked!`);
            isFound=true;
        }

    }
}
function reverseStr(str) {
    return str.split("").reverse().join("");
}
