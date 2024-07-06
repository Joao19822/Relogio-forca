// console.log('array')
// var top_frutas = ['maça', 'banana', 'abacaxi', 'tomate']

// console.log(top_frutas)
// top_frutas.push('kiwi')
// top_frutas.splice(3, 1)
// console.log(top_frutas)

//newFunction()

//function newFunction() {
//     var contador = 1
//     var t1 = setInterval(() => {
//         document.getElementById('cronometro').innerHTML = ""
//         document.getElementById('cronometro').innerHTML = contador++
//     }, 1000)

//     setTimeout(() => {
//         alert('pronto')
//     }, 5000)
// }

function pega_hora() {
    setInterval(() => {

        let tempo = new Date()

        document.getElementById('relogio').innerHTML = `
        ${tempo.getHours()}:
        ${tempo.getMinutes()}:
        ${tempo.getSeconds()} 🕘
        `
    }, 1000);
}

pega_hora()

var palavra_original = 'jao V'
let tentativas = 3

palavra = palavra_original.split('')
console.log(palavra);
console.log(palavra.length)

var preenchida = [];

for (let index = 0; index < palavra.length; index++) {
    preenchida.push('_')
}

var forca = document.getElementById('forca')

function ver_preenchida() {

    forca.innerHTML = ""
    preenchida.forEach(item => {
        forca.innerHTML += item + ' '
    });
}

ver_preenchida()

var btn_ver = document.getElementById('ver');
btn_ver.addEventListener('click', () => {

    let letra = prompt('Digita algo ae')
    let onde = palavra.indexOf(letra)
    if (onde >= 0) {
        console.log('tem ' + letra + 'na posicao' + onde)
        preenchida[onde] = letra
        ver_preenchida()
    } else {
        if (tentativas == 1) {
            alert('morreu')
            alert('a palavra era ' + palavra_original)
        }
    }
})
