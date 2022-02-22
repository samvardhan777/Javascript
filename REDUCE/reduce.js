"use strict"
let arr=[12,13,14,15,16,17];
function REDUCE(arr,initial_value)
{
  let c=initial_value;
    for (let a of arr)
    {
      c=c+a;
    }
    return(c);
}
console.log(REDUCE(arr,0));
