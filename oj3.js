
obj = {
    data : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]
   

    reverseArrayStrings : function() { 
        
       // Write Code Here
       let bag2="";
       for(i=0; i<= this.data.length-1; i++){
           let bag="";
           for(j=this.data[i].length-1; j>=0; j--){
             bag+= this.data[i][j];
           
           }
             bag2+= bag+" ";
       } 
       
       console.log(bag2); 
      
       
        
       // Console.log the output : the elements of array in horizontal
    },

}
// Do not call the Object Method

