function triangle(n){
    let num = Number(n);
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            let thing = i+" ";
            process.stdout.write(thing);
            
        }
        console.log();
    }
}
triangle(5);
