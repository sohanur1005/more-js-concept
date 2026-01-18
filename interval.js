// console.log(1)
// console.log(2)
// setTimeout(doSomething,4000)
// console.log(4)
// console.log(5)
// console.log(6)

// function doSomething()
// {
//     console.log(3)
// }



 const clockID=setInterval(something,2000)

let n=0;
function something(){
    n++;

    if(n>6)
    {
        clearInterval(clockID)
    }
    console.log(n)

}
