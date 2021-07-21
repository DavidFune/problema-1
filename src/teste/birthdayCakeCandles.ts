
var readlineSync = require('readline-sync');

/* forma recursiva de procurar o maior elemento
a qual recebe um array de velas e o tamanho desse array e o indice que está no array
 */
const biggestCandle = (candles: number[], tam: number, indice: number): number => {
    /* verifica se o array possui um elemento */
    if(tam == 0){
        return candles[indice];
    }else{
        /* verifica se o último elemento e maior do que o indice passado*/
        if(candles[tam - 1] > candles[indice]){
            /* se sim ele chamo novamente a função com o indice tamanho do array menos -1*/
            return biggestCandle(candles,tam - 1, tam -1);
        }
        else{
            /* se não passo o indice que refere que  o elemento do indice é maior */
            return biggestCandle(candles,tam - 1, indice);
        }
    }

    /* esses passo se repetem até chegar com tamanho 0 */
}

/* função para calcular o numero de velas maior */
const birthdayCakeCandles = (candles: number[]) => {

    /*analisa se o array tem tamanho maior ou igual que 10^5, se 
    sim retorna uma msg e sai da aplicação */
    if(candles.length >= Math.pow(10, 5)){
        console.log('Quantidade de velas não suportada');
        return
    }
    /* procura um elemento no array com altura maior ou igual
    a 10^7 e retorna uma msg. 
     */
    for(var i in candles){
        if(candles[i] >= Math.pow(10, 7)){
            console.log('Existe(m) altura(s) muito grade');
            return
        }
    } 
    /* tallerCandle recebe o maior elemento do array */
    const tallerCandle = biggestCandle(candles, candles.length, 0);
    let highestCandleAmount = 0
    /* Procura quantos elementos são iguais ao maior elemeto do array 
    a cada elemento igual acrecenta se 1 em highestCandleAmount*/
    for(var i in candles){
        if(candles[i] == tallerCandle){
            highestCandleAmount = highestCandleAmount+1 
        }
    } 

    /* caso tudo ocorra bem retornase a quantidade de velas a se sobrar */
    return highestCandleAmount
}

var candles: number[] = readlineSync.question('Digite o array de velas, um nume e virgula. Ex: 1,3,4,6');

console.log(birthdayCakeCandles(candles));
