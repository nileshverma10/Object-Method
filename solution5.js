let arr=[1,2,3,4,5,4,3,2,4,5,5,6];
let obj={};
for(i=0; i<=arr.length-1; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]++;
    }
}
let sum=0;
for(let i in obj){
    if(obj[i]==1){
    sum+=+(i);
    }
}
console.log(sum);