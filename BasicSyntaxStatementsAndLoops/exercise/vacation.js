function calc(c,t,d){
    let count= Number(c);
    let type = t;
    let day = d;
    let price = 0;
    switch(type){
        case "Students":
            switch(day){
                case "Friday":
                    price=count *8.45;
                    break;
                case "Saturday":
                    price = count *9.80;
                    break;
                case "Sunday":
                    price = count*10.46;
                    break;
            }
            if(count>=30){
                price *=0.85;
            }
            break;
        case "Business":
            switch(day){
                case "Friday":
                    price=count *10.90;
                    break;
                case "Saturday":
                    price = count *15.6;
                    break;
                case "Sunday":
                    price = count*16;
                    break;
            }
            if(count>=100){
                price = price - (price*(count-10));
            }
            break;
        case "Regular":
            switch(day){
                case "Friday":
                    price=count *15;
                    break;
                case "Saturday":
                    price = count *20;
                    break;
                case "Sunday":
                    price = count*22.50;
                    break;
            }
            if(count>=10&&count<=20){
                price *=0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
calc(40,
    "Regular",
    "Saturday"    
    )