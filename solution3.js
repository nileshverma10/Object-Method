function getCount(str){
    //let str="masai";
    let obj={};
    for(i=0; i<=str.length-1; i++){
        if(obj[str[i]]==undefined){
            obj[str[i]]=1;

        }else{
            obj[str[i]]++;
        }
    }
     return obj; 
}
function getMaxChar(obj){
  let max=-Infinity;
let ans;
for(let i in obj){
    if(obj[i]>max){
        max=obj[i];
        ans=i;
  }
}
return ans; 
}
let obj=getCount("giriraj");
console.log(obj);
let y= getMaxChar(obj);
console.log(y);
 