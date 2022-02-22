"use strict"
let arr=[23,12,23,34];
function FILTER(arr,A)
{
  console.log(A(arr));
}
function Action(arr)
{
    for( let i=0;i<arr.length;i++)
    {
      arr[i]=arr[i]*10;
    }
    return(arr);
}
let result=FILTER(arr,Action);
