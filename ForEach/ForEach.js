const arr = [2,21,23,23,34,324,4532];
function FOREACH(arr)
{
let copyItems=[];
for (let i = 0; i < arr.length; i++) {
  copyItems.push(arr[i]);
}
return(copyItems);
}
let result=FOREACH(arr);
console.log(result);
