// Genera contraseñas

var rndm = require('seedrandom'); // substituto de Math.Random()

function generarPass(long=13) {
    password = "";

    // muestra de valores
    var uppers = "ABCDEFGHJKMNPQRTUVWXYZ";
    var lowers = "abcdefghjkmnpqrtuvwxyz";
    var digits = "2346789";
    var choices = [
        uppers,
        lowers,
        digits,
    ]
    
    // inicializamos cada vez con unha entropía diferente
    r = rndm(new Date().getTime(), { entropy: true })

    // concatena caracteres generados
    for (var i = 0; i < long; i++) {
        //selecciona unha das opcios entre uppers, lowers e digits:
        var choice = choices[Math.ceil(r() * 3) - 1];
        
        //selecciona un valor da opción seleccionada previamente:
        var choiceItem = choice[Math.ceil(r() * choice.length) - 1];

        //agrega ó password
        password += choiceItem;
    }

    return password;
}

console.log(generarPass());
