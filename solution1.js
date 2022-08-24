let str="masi";
let obj={};
for(i=0; i<=str.length-1; i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
}

let max=-Infinity;

for(let i in obj){
    if(obj[i]>1){
     console.log("Not Unique");
   return;
   }
}
 console.log("unique"); 