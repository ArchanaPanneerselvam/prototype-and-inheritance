//1
// class car{
//     constructor(wheel,color){
//         this.wheel=wheel
//         this.color=color
//     }
// }
// class jaguar extends car{
//     constructor(wheel,color,engine,make,seats){
//         super(wheel,color)
//         this.engine=engine
//         this.make=make
//         this.seats=seats
//     }
// }
// var newcar=new jaguar(4,"blue","1l","F-Pace",5)
// console.log(newcar);

//2
let arr=[1,2,3,4,5] ;                        
 console.log(Object.getPrototypeOf(arr));


//3
// Array.prototype.sum=function(){
//     let total=0
//     for(let i=0;i< this.length;i++){
//         total+=this[i]
//     }
//     return total
// }
// let a=[1,2,3,4,5]
// console.log(a.sum())

// //4
// class car{
//     constructor(wheel,color){
//         this.wheel=wheel
//         this.color=color
//     }
//     startengine(){
//         console.log("car start")
//     }
// }
// class jaguar extends car{
//     constructor(wheel,color,engine,make,seats){
//         super(wheel,color)
//         this.engine=engine
//         this.make=make
//         this.seats=seats
//     }
// }
// var newcar=new jaguar(4,"blue","1l","F-Pace",5)
// console.log(Object.keys(newcar));