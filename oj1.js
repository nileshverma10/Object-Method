function masaiUniqueness(S) {
    //write code here
        let obj={};
        for(i=0; i<=S.length-1; i++){
            if(obj[S[i]]==undefined){
               obj[S[i]]=1;   
            }else{
                obj[S[i]]++;
            }
        }
           for(let i in obj){
               if(obj[i]>1){
                   console.log("No");
                   return;
               }
           }
           console.log("Unique");
}
