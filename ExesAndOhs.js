function XO(str) {
    let x = 0;
    let o = 0;
    
    for(let i = 0; i < str.length; i++){
    let string = str[i];
    
    if(string === "x" || string === "X"){
    x++;
    }
    else if(string === "o" || string === "O"){
    o++;
    }
    }
    return x === o;
}



