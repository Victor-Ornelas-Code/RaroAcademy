// Questão 01:
// Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").
// Imagino que você fará bom uso da https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

function valoresDeX(a: number){
    return function(b: number){
        return function(c: number){
            const delta = Math.pow(b,2) - ((4 * a * c));
            if (delta < 0){
                return console.log('Equação não possui raizes reais')
            }           
            const valorDeXRaizDeltaPositivo = (-b + Math.sqrt(delta))/(2 * a);
            const valorDeXRaizDeltaNegativo = (-b - Math.sqrt(delta))/(2 * a);
            console.log(`Solução = {${valorDeXRaizDeltaNegativo}, ${valorDeXRaizDeltaPositivo}}`);
            return [valorDeXRaizDeltaNegativo , valorDeXRaizDeltaPositivo]
        }
    }
}

valoresDeX(5)(1)(1)



// Questão 02:
// Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`.
// A partir dos valores recebidos, você precisa verificar se os valores forma um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.

// Condições de existencia de um triangulo:
// a + b > c
// b + c > a
// a + c > b

// Tipos de triangulo:
// Equilatero - Todos os lados iguais.
// Isósceles - Dois lados iguais.
// Escaleno - Lados diferentes

function ehTriangulo(a:number){
    return function(b:number){
        return function(c:number){
            const ladoAB = a + b > c;
            const ladoBC = b + c > a;
            const ladoAC = a + c > b;
            if(!ladoAB || !ladoBC || !ladoAC){
                return false
            }
            return true
        }
    }
}


function tipoDeTriangulo (a: number) {
    return function (b: number){
        return function (c: number){
            const respEhTriangulo = ehTriangulo(a)(b)(c)
            const equilátero = a === b && a === c;
            const isoceles = (a === b && a !== c) || (a ===c && a !== b) || (b === c && b !== a);
            const escaleno = (a !== c && a !== b);

            if (respEhTriangulo && equilátero){
                console.log('Triangulo equilatero');
            }
            else if (respEhTriangulo && isoceles){
                console.log('Triangulo isóceles');
            }
            else if (respEhTriangulo && escaleno){
                console.log('Triangulo escaleno');
            }
            else{
                console.log('Não é um triangulo')
            }

        }
    }
}

tipoDeTriangulo(5)(2)(4)
tipoDeTriangulo(5)(5)(4)
tipoDeTriangulo(5)(4)(5)
tipoDeTriangulo(4)(5)(5)
tipoDeTriangulo(5)(5)(5)
tipoDeTriangulo(1)(5)(2)


// Questão 03:
// Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os objetos ordenados.
// Pede-se que não se utilize métodos prontos do objeto de array, como o [array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). 
// Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas para esta implementação: `bubble sort` ou `selection sort`.

const numeros = [6, 2, 7, 4, 9, 1];

function selectionSort(conjunto:number[]) { 
    let n = conjunto.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(conjunto[j] < conjunto[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = conjunto[i]; 
             conjunto[i] = conjunto[min];
             conjunto[min] = tmp;      
        }
    }
    console.log(conjunto)
    return conjunto;
}

selectionSort(numeros)


function bubbleSort(conjunto: number[]) {
    const length = conjunto.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - i - 1); j++) {
            if(conjunto[j] > conjunto[j+1]) {
                let tmp = conjunto[j];
                conjunto[j] = conjunto[j+1];
                conjunto[j+1] = tmp; 
            }
        }        
    }
    console.log(conjunto)
    return conjunto
}

bubbleSort(numeros)




// Para os exercícios 4, 5 e 6, considere os dois conjuntos abaixo:

 const a = [1, 2, 3, 4, 5, 6];
 const b = [4, 4, 5, 6, 7, 8];

// Questão 04:
// Implementar a união dos grupos a e b.
// Os valores do objeto resultante devem ser todos únicos

function conjuntoPossuiElemento (numeroDoConjunto: number , conjunto: number[]){
    const posicao = conjunto.indexOf(numeroDoConjunto)
    if (posicao >= 0){
        return true;
    }
    return false;
}

function uniaoAB(conjuntoA: number[] , conjuntoB: number[]){
    const conjuntoC: number[] = [];

    for (let i in conjuntoA) {
        const numeroDoConjuntoA = conjuntoA[i];

        const respPossuiElemento = conjuntoPossuiElemento(numeroDoConjuntoA, conjuntoC);

        if(!respPossuiElemento) {
            conjuntoC.push(numeroDoConjuntoA);
        }
    }
    
    for (let j in conjuntoB) {
        const numeroDoConjuntoB = conjuntoB[j];

        const respPossuiElemento = conjuntoPossuiElemento(numeroDoConjuntoB, conjuntoC);

        if(!respPossuiElemento) {
            conjuntoC.push(numeroDoConjuntoB);
        }
    }
    
    console.log(conjuntoC)
    return conjuntoC

}


uniaoAB(a , b)
uniaoAB(b , a)


//Quatao 05: Implementar a interseção dos gupos a e b.

function intersecaoAB(conjuntoA: number[] , conjuntoB: number[]){
    const conjuntoC: number[] = [];

    for (let i in conjuntoA) {
        const numeroDoConjuntoA = conjuntoA[i];

        const respPossuiElementoConjuntoB = conjuntoPossuiElemento(numeroDoConjuntoA, conjuntoB);
        const respPossuiElementoConjuntoC = conjuntoPossuiElemento(numeroDoConjuntoA, conjuntoC);

        if(respPossuiElementoConjuntoB && !respPossuiElementoConjuntoC) {
            conjuntoC.push(numeroDoConjuntoA);
        }
    }
    console.log(conjuntoC)
    return conjuntoC
}

intersecaoAB(a , b)
intersecaoAB(b , a)

// Questão 06: Implementar a diferença de a e b

function diferencaAB(conjuntoA: number[] , conjuntoB: number[]){
    const conjuntoC: number[] = [];

    for (let i in conjuntoA) {
        const numeroDoConjuntoA = conjuntoA[i];

        const respPossuiElementoConjuntoB = conjuntoPossuiElemento(numeroDoConjuntoA, conjuntoB);

        if(!respPossuiElementoConjuntoB) {
            conjuntoC.push(numeroDoConjuntoA);
        }
    }
    console.log(conjuntoC)
    return conjuntoC
}

diferencaAB(a , b)
diferencaAB(b , a)