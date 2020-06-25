console.log("Before food  prepare");
function preparefood(callback){
  setTimeout(()=>{
    console.log(" prepare food");
    callback("food is ready");
  
  },10);
}
function preparefrenchtoast(callback){
  setTimeout(()=>{
    console.log(" prepare frenchtoast");
    callback("frenchtoast is ready");
  
  },20);
}
function preparecoffee(callback){
  setTimeout(()=>{
    console.log(" prepare coffee");
    callback("Coffee is ready");
  
  },30);
}
preparefood(function(value){
    console.log("food is ready callback", value);
    preparefrenchtoast(function(value){
        console.log("frenchtoast is ready callback", value);
        preparecoffee(function (value){
            console.log("food is ready callback", value);
          });
      });
  });


console.log("After prapare food dinner is ready");