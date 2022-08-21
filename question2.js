function mapSymbolsSum(N, str) {
    //write code here
    let symbol="!@#$%^&*";
    let obj={};
    for(i=0; i<=symbol.length-1; i++){
        let ch= symbol[i];
        obj[ch]=N;
        N++;
    }
      let sum=0;
      for(i=0; i<=str.length-3; i++){
          let ch=str[i];
          sum=sum+obj[ch];
      }
      console.log(sum);
  }
  