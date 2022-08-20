function masaiPalSubString(S){
    //write code here
       let res=1;
     for(let i=2;i<=S.length;i++){
     for(let j=0;j<=S.length-i;j++){
         let tempStr = S.substring(j,j+i);
          if(isPalindrome(tempStr)){
            if(tempStr.length > res){
             res = tempStr.length;
                        
             }
         }
        }
     }
   console.log(res);     
}


 function isPalindrome(name){
     let bag="";
     for(i=name.length-1; i>=0; i--){
         bag=bag+name[i];
     }
    return name==bag;
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    

