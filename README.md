# Generador de contraseñas

Genera contraseñas sin carácteres que se puedan confundir, como por ejemplo el cero y la o mayúscula.

Debido a que Math.Random() no se puede "seedear" usamos el módulo "seedrandom" aumentando la entropía con la hora actual.

## Ejecución:
```sh
node index.js
```


## Comprobación de colisión:

Podemos probar si devuelve algún duplicado con el siguiente comando de shell:
```sh
for i in {1..500}; do node index.js; done | sort | uniq -cd
```
El cual pintará por consola la linea duplicada.

NOTA: Podríamos acelerarlo para pruebas más exhaustivas haciendo el for en el index.js y filtrando después con sort y uniq como en el ejemplo anterior.

