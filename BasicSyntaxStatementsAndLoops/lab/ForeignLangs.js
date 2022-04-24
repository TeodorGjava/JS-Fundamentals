function check(input){
let thing = input;
switch(thing){
    case"USA":
    case"England":
    console.log("English");
    break;
    case "Spain":
    case"Argentina":
    case"Mexico":
        console.log("Spanish"); 
        break;
        default:
            console.log("unknown");
            break;
}
}