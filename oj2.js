function characters1DArray(N,str){
	//Enter Code Here
	let char="*-/";
	let bag="";
	for(i=0; i<N; i++){
	    for(j=0; j<=char.length-1;j++){
	        if(str[i]==char[j]){
	            bag+= j;
	        }
	       
	    }
	   
	}  
	console.log(bag);
	
}
