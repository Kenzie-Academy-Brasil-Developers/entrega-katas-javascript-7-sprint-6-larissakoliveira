/*forEach*/
let array = [1, 2, 3, 4, 5, 6]
function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}
function mostrarElementosForEach(atual, index, arr){
    console.log(atual, index, arr)
}

newForEach(array, mostrarElementosForEach)


/*fill*/
let array1 = [7, 8, 9, 10, 11, 12]

function newFill(array, valor, inicio = 0, fim = array.length){
    for(let i = inicio; i < fim; i++){
    array[i] = valor
 }    
 return array
}

console.log(newFill(array1, 1, 2, 4))


/*map*/
let array2 = [13, 14, 15, 16, 17, 18]

function newMap(array, callback){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i], i, array))
    }
    return newArr
}

function mostrarElementosMap (atual, index, arr){
    return atual*2
}

console.log(newMap(array2, mostrarElementosMap))


/*some*/
let array3 = [14, 15, 16, 17, 18, 19]

function newSome(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i]) === true){
            return true
        }
    }
    return false
}

function isBiggerThan10(element) {
    return element > 50;
}

console.log(newSome(array3, isBiggerThan10))


/*find*/
let array4 = [15, 16, 17, 18, 19, 20]

function newFind(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) === true){
            return array[i]
        }
    }
}
function call(element){
    return element > 18
}

console.log(newFind(array4, call))


/*findIndex*/
let array5 = [21, 22, 23, 24, 25, 26]

function newFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]) === true){
            return i
        }
    }
}

function mostrarElementoFindIndex(atual){
    return atual > 22
}

console.log(newFindIndex(array5, mostrarElementoFindIndex))

/*every*/
let array6 = [27, 28, 29, 30, 31, 32]

function newEvery (arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]) === false){
            return false
        }else{
            return true
        }
    }
}

function mostrarEvery(elemento){
    return elemento > 20;
}

console.log(newEvery(array6, mostrarEvery))

/*filter*/
let array7 = [33, 34, 35, 36, 37, 38]

function newFilter(arr, callback){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]) === true){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function mostrarFilter(elemento){
    return elemento <= 36;
}

console.log(newFilter(array7, mostrarFilter))

/*concat*/
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let array8 = [39, 40, 41, 42, 43, 44]

function newConcat(arr, valor1, valor2){
    let newArr = [...arr, ...valor1, ...valor2]
    return newArr
}

console.log(newConcat(array8, arr1, arr2))

/*includes*/
let array9 = [45, 46, 47, 48, 49, 50]

function newIncludes(arr, buscaElemento){
    for(let i = 0; i < arr.length; i++){
        if(buscaElemento === arr[i]){
            return true
        }
    }
    return false
}
console.log(newIncludes(array9, 50))

/*indexOf*/
// let array10 = [51, 52, 53, 54, 55, 56]

// function newIndexOf(arr, elementoBuscado){
//     for(let i = 0; i < arr.length; i++){
//         elementoBuscado 
//     }
// }
/*join*/
/*reduce*/
/*slice*/


/*flat*/
/*flatMap*/
/*Array.of*/
// newForEach, newFill, newMap, newSome, newFind, newFindIndex, newEvery, newFilter, newConcat, newIncludes, newIndexOf, newJoin, newReduce, newSlice, newFlat, newFlatMap e newArrayOf
