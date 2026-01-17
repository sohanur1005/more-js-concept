console.log(1)
console.log(2)
doSomething()
console.log(4)
console.log(5)

function doSomething(){
    console.log(3)

}

/*  output
1
2
3
4
5
*/

console.log(1)
console.log(2)
setTimeout(doSomething)
console.log(4)
console.log(5)

function doSomething(){
    console.log(3)

}

/*  output
1
2
4
5
3
*/