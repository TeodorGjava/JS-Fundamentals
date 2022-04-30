function print(n1,n2){
    let num1 = Number(n1);
    let num2 = Number(n2);
    let sum =0;
    let arr= "";
    for (let i = num1; i <= num2; i++) {
        arr+=i+" ";
        sum+=i;
    }
    console.log(arr);
    console.log(`Sum: ${sum}`);
}
print(5, 10);