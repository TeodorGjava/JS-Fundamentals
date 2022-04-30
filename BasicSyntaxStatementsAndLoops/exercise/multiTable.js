function multi(n){
    for (let i = 1; i <= 10; i++) {
        let x = Number(n)*i;
        console.log(`${Number(n)} X ${i} = ${x}`);    
    }
}
multi(5);