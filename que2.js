//Given an array find the unique items in the array

let arr=["nilesh","rajesh","nilesh","suresh","rajesh"];
  let obj={};
for(i=0; i<=arr.length-1; i++){
  if(obj[arr[i]]== undefined){
    obj[arr[i]]=1;
  }else{
    obj[arr[i]]++;
  }
}
for(let i in obj){
  if(obj[i]==1){
    console.log(i);
  }
}

