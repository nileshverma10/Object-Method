//Create an object with the following functionality

//Ability to add student details and 3 subject marks
//Methods to find the student with the least and highest total

let details={
  
      arr:[],
  addData: function (name, math, eng, phy){
      let obj={};
    
      obj["name"] = name;
    obj["math"]= math;
      obj["eng"]= eng; 
      obj["phy"]= phy;
      this.arr.push(obj);
     },

    least: function(){
   let max= -Infinity;
      let name;
   for(i=0; i<=this.arr.length-1; i++){
     let total=this.arr[i].math+this.arr[i].eng+this.arr[i].phy;
     if(total>max){
       max=total;
       name=this.arr[i].name;
     }
   }
     console.log(name);
}
};
details.addData("nilesh",56,78,54);
details.addData("mahesh",56,75,54);
details.addData("monu",36,78,84);

details["least"]();

