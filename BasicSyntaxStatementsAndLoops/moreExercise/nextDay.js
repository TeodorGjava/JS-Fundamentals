function recompile(a,b,c){
    if(c==30){
        b++;
        c=0;
        c++;
    }else{
        c++;
    }
    var date = a+"-"+b+"-"+c;
    console.log(date);
}
recompile(2016, 6, 30);