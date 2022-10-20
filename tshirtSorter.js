// Write your solution below:


// function tSorter (string) {return string.split('').sort().reverse().join('')}
// console.log(tSorter('mmmmmsssssllllllsssmsmm'))

// function tSorter (str) {
//     let s = []
//     let m = []
//     let l = []

//     for(let i = 0; i < str.length; i++) {
//         str.split('')  
//         if (str[i] === 's'){
//             str[i].push(s)
//         } else if(str[i] === m) {
//             str[i].push(m)
//         } else [
//             str[i].push(l)
//         ]
//     }
//     let string = String.join(s, m, l)
//     console.log(string)
// }

// tSorter('slmmlsslmsslsmslmsls')


//jareds solution

function tshirtSorter(str) {
    let sPile = []
    let mPile = []
    let lPile = []

    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'l') {
            lPile.push(str[i])
        }  else if (str[i] === 'm') {
            mPile.push(str[i])
        } else if (str[i] === 's') {
            sPile.push(str[i])
        } 
    }
    return sPile.join('') + mPile.join('') + lPile.join('')

}

console.log(tshirtSorter('lms'))
console.log(tshirtSorter('sssllmlsmslmslsmslmss'))
console.log(tshirtSorter('llmmss'))