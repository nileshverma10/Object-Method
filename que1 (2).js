//Given a string print, the number of times each character appears

let str="kallu";
let obj={};
for(i=0; i<=str.length-1; i++){
  if(obj[str[i]]==undefined){
    obj[str[i]]=1;
  }else{
    obj[str[i]]++;
  }
}
console.log(obj);