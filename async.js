

const myLoader=() =>{
    return new Promise((resolve,reject) =>{
        const success=Math.random();
        if(success <=0.5)
        {
            resolve(success);

        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data =>console.log('Resolve value',data))
.catch(error => console.log('Rejected with value',error))


// Await

async function loadData(){
    const res=await fetch('URL');
    const data=await res.json();
    console.log(data)

}
loadData();
