let n = 10;
label:
for (let i = 2; i <= n; i++) {
    let flag = 1;
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue label;
    } 
     alert( i );
}