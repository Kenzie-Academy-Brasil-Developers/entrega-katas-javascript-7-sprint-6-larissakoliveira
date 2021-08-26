// /*forEach*/
// let array = [1, 2, 3, 4, 5, 6]
// function newForEach(array, callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i], i, array)
//     }
// }
// function mostrarElementosForEach(atual, index, arr){
//     console.log(atual, index, arr)
// }

// newForEach(array, mostrarElementosForEach)


// /*fill*/
// let array1 = [7, 8, 9, 10, 11, 12]

// function newFill(array, valor, inicio = 0, fim = array.length){
//     for(let i = inicio; i < fim; i++){
//     array[i] = valor
//  }    
//  return array
// }

// console.log(newFill(array1, 1, 2, 4))


/*map*/
// let array2 = [13, 14, 15, 16, 17, 18]

// function newMap(array, callback){
//     let newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(callback(array[i], i, array))
//     }
//     return newArr
// }

// function mostrarElementosMap (atual, index, arr){
//     return atual*2
// }

// console.log(newMap(array2, mostrarElementosMap))


// /*some*/
// let array3 = [14, 15, 16, 17, 18, 19]

// function newSome(arr, callback){
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i]) === true){
//             return true
//         }
//     }
//     return false
// }

// function isBiggerThan10(element) {
//     return element > 50;
// }

// console.log(newSome(array3, isBiggerThan10))


// /*find*/
// let array4 = [15, 16, 17, 18, 19, 20]

// function newFind(array, callback){
//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i]) === true){
//             return array[i]
//         }
//     }
// }
// function call(element){
//     return element > 18
// }

// console.log(newFind(array4, call))


/*findIndex*/
// let array5 = [21, 22, 23, 24, 25, 26]

// function newFindIndex(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         if(callback(arr[i]) === true){
//             return i
//         }
//     }
// }

// function mostrarElementoFindIndex(atual){
//     return atual > 22
// }

// console.log(newFindIndex(array5, mostrarElementoFindIndex))

/*every*/
let array6 = [27, 28, 29, 30, 31, 32]

function newEvery (arr, callback){

}

function mostrarEvery(elemento){
    return elemento >= 20;
}

/*filter*/
/*concat*/
/*includes*/
/*indexOf*/
/*join*/
/*reduce*/
/*slice*/
/*flat*/
/*flatMap*/
/*Array.of*/
// newForEach, newFill, newMap, newSome, newFind, newFindIndex, newEvery, newFilter, newConcat, newIncludes, newIndexOf, newJoin, newReduce, newSlice, newFlat, newFlatMap e newArrayOf
