const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
   return console.log(valor)
}


function kata1(num) {  
    let result = []
    for(let i = 1; i<=num; i++) {
        result.push(i)
    }
   return result
}
let sequencia = kata1(25)
showResults(sequencia)

function kata2(num) {
    let result = []
    for(let i = num; i>0; i--) {
        result.push(i)
    }
   return result
}
let reverseSeq = kata2(25)
showResults(reverseSeq)


function kata3(num) {
    let result = []
    for(let i = -1; i>=num; i--) {
        result.push(i)
    }
   return result
}
let negatievSeq = kata3(-25)
showResults(negatievSeq)


function kata4(num) {
    let result = []
    for (let i=num; i<0; i++){
        result.push(i)
    }
    return result
}

let reverseNegSeq = kata4(-25)
showResults(reverseNegSeq)

function kata5(num) {
    let result = []
    for (let i=num; i>=-num; i--){
       if(i%2 !== 0 ) {
        result.push(i)
    }}
    return result
}
let impars = kata5(25)
showResults(impars)


function kata6(num) {
    let result = []
    for (let i=1; i<=num; i++){
       if(i%3 === 0 ) {
        result.push(i)
    }}
    return result
}
let divisiveispor3 = kata6(100)
showResults(divisiveispor3)

function kata7(num) {
    
    let result = []
    for (let i=1; i<=num; i++){
       if(i %7 === 0 ) {
        result.push(i)
    }}
    return result
}
let divisiveispor7 = kata7(100)
showResults(divisiveispor7)


function kata8(num) {
    let result = []
    for (let i = num; i>0; i--){
        if(i%3 === 0 || i%7===0 ) {
            result.push(i)
        }
    }
    return result
}
let div3OuDiv9Reverse = kata8(100)
showResults(div3OuDiv9Reverse)


function kata9(num) {
    let result = []
    for (let i = 1; i<=num; i++){
        if(i%2 !== 0 && i%5===0 ) {
            result.push(i)
        }
    }
    return result
}
let imparsDivPor5 = kata9(100)
showResults(imparsDivPor5) 



function kata10(arr) { 
    let valoresArr = ""
    for (let i = 0; i<arr.length; i++) {
        valoresArr += `${arr[i]}, `
    }
    return valoresArr
}
let exibindoSample = kata10 (sampleArray)
showResults(exibindoSample) 


function kata11(arr) {
      let valoresArr = ""
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] %2 ===0)
        valoresArr += `${arr[i]}, `
    }
    return valoresArr
}
let exibindoParSample = kata11 (sampleArray)
showResults(exibindoParSample) 


function kata12(arr) {
    let valoresArr = ""
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] %2 !==0)
        valoresArr += `${arr[i]}, `
    }
    return valoresArr
}
let exibindoImparSample = kata12 (sampleArray)
showResults(exibindoImparSample)


function kata13(arr) {
    let valoresArr = ""
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] % 8 === 0){
            valoresArr += `${arr[i]}, ` 
        }
    }
    return valoresArr
}
let exibeDiv8Sample = kata13(sampleArray)
showResults(exibeDiv8Sample)


function kata14(arr) {
    let valoresArr = ""
    for(let i = 0; i<arr.length; i++) {
            valoresArr += `${arr[i]*arr[i]}, ` 
    }
    return valoresArr
}
let exibeQuadrSample = kata14(sampleArray)
showResults(exibeQuadrSample)
 

function kata15(num) {
    let somando = 0
    for(let i = 0; i<=num; i++){
        somando += i
    }
    return somando 
}    
let somaAllNum = kata15(20) 
showResults(somaAllNum)


function kata16(arr) {
    let somando = 0
    for(let i = 0; i<arr.length; i++){
        somando += arr[i]
    }
    return somando 
}
let somaAllArr = kata16(sampleArray) 
showResults(somaAllArr)


function kata17(arr) {
    let maior = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]> maior){
            maior = arr[i]
        }
    }
    return maior
}
let MaiorFromArr = kata17(sampleArray)
showResults(MaiorFromArr)


function kata18(arr) {
    let menor = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i]< menor){
            menor = arr[i]
        }
    }
    return menor
}
let MenorFromArr = kata18(sampleArray)
showResults(MenorFromArr)

