console.log("Before food  prepare");

function preparefood(data){
    let promise = new Promise (function( resolve, reject) {
        setTimeout(()=>{
           if (data !== 2){
            console.log(" prepare food");
            resolve("food is ready");
           } 
            else{
                reject('value is not acceptable');
           }    
           
           
        },10);
    });
  return promise;
}

function preparefrenchtoast(){
    let promise = new Promise (function( resolve, reject) {
    setTimeout(()=>{
        console.log(" prepare frenchtoast");
        resolve("frenchtoast is ready");
  
         },20);
    });
    return promise;
}
function preparecoffee(){
    let promise = new Promise (function( resolve, reject) {
    setTimeout(()=>{
        console.log(" prepare coffee");
        resolve("Coffee is ready");
  
        },30);
    });
    return promise;
}
let promise =preparefood(2);
//console.log("promise=",promise);
promise.then(function(value){
    console.log("food is ready callback=", value);
    return preparefrenchtoast();

})
.then(function(frenchtoastvalue){
    console.log("frenchtoast is ready callback", frenchtoastvalue);
    return preparecoffee();
})
.then(function(coffeevalue){
    console.log("coffee is ready callback", coffeevalue);
})
.catch(function(error){
    console.log("error=",error)
});



/*preparefood(function(value){
    console.log("food is ready callback", value);
    preparefrenchtoast(function(value){
        console.log("frenchtoast is ready callback", value);
        preparecoffee(function (value){
            console.log("food is ready callback", value);
          });
      });
  });*/


console.log("After prapare food dinner is ready");