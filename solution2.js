let str="masai";
let obj={};
for(i=0; i<=str.length-1; i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
}


let max=-Infinity;
let ans;
for(let i in obj){
    if(obj[i]>max){
        max=obj[i];
        ans=i;
   }
}
 console.log(ans); 