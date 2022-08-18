//Create a rectangle object with length and width properties
//Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle={
  length:24,
  breath:20,

area:  function(){
  return this.length*this.breath;
},

perimeter: function(){
  return 2*(this.length+this.breath);
}
};
 let x=rectangle.area();
let y=rectangle.perimeter();
console.log(x,y);