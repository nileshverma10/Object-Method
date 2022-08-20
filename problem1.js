function traverse2dArray(N, M, matrix){
    //write code here
       let bag="";
    for(i=0; i<M; i++){
        for(j=N-1; j>=0; j--){
            bag+= matrix[j][i]+" ";
            
        }
    }
    console.log(bag);
  
}
