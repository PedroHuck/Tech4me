/* Conte até Cem utilizando duas repetições encadeadas */

for (var i = 0 ; i < 10 ; i++ ) {
    //console.log(i, "LAÇO EXTERNO");
    for (var j = 0; j < 10; j++) {
        //console.log(j, "LAÇO INTERNO")
        var cem = i * 10 + j + 1;
        console.log(cem);
    }

}