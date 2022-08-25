
obj = {
    marks : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]
   subjects : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]

    bestOfFive : function() { 
        
       // Part 1 : Write Code Here
       let min= Infinity;
       let total=0;
       for(i=0; i<=this.marks.length-1; i++){
           total += this.marks[i];
           if(this.marks[i]<min){
               min=this.marks[i];
               
           }
       }
       console.log(total-min);
       
       
       
       // Console.log the output : total of best of five
    },



    badSubject : function() { 
    
        // Part 2 : Write Code Here
       let min=Infinity;
       let sub="";
       for(i=0; i<=this.marks.length-1; i++){
           if(this.marks[i]<min){
               min= this.marks[i];
               sub= this.subjects[i];
           }
       }
       console.log(sub);
       
       // Console.log the result : subject name with lowest marks 
    },



    bestSubject : function() { 
    
        // Part 3 : Write Code Here
        let max= -Infinity;
        let sub2="";
        for(i=0; i<=this.marks.length-1; i++){
            if(this.marks[i]>max){
                max= this.marks[i];
                sub2= this.subjects[i];
            }
            
        }
       console.log(sub2);
       
       
        // Console.log the output : subject name with highest marks
    },
}
// Do not call the Object Method

