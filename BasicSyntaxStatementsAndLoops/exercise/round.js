function printf(num,num2){
    let numb = Number(num);
    let point = Number(num2);
    if(point>15){
        point = 15;
    }
    console.log(numb.toFixed(point));
}
printf(3.6745,2)