function sumOfSpecialPairs(N,A){
    //write code here
    let sum=0;
    for(i=0; i<N; i++){
        for(j=i+1; j<N; j++){
            let diff= j-i;
            if(checkP(diff)){
                sum+= Math.abs(A[i]- A[j]);
            }
        }
    }
    console.log(sum);
}
   
    function checkP(num){
    if(num<=1){
        return false;
    }
    for(i=2; i<=num**0.5; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
     }

