let arr=[
  [1,2,3],
  [4,5,6],
 [7,8,9]
];

let row= arr.length;
let column= arr[0].length;
let bag="";
for(i=0; i<=row-1; i++){
  for(j=column-1;j>=0; j--){
    bag=bag+arr[j][i]+" ";
   
  }
}
 console.log(bag);
