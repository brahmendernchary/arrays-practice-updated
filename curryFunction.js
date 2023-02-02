// const band =(ingrediant1)=>{
//     return (ingrediant2) => {
//         return (ingrediant3) => {
//             return `${ingrediant1},${ingrediant2},${ingrediant3}`;
//         }
//     }
// }

const band = ingrediant1 => ingrediant2 => ingrediant3 =>
    `${ingrediant1},${ingrediant2},${ingrediant3}`;


const myband = band("naga")("bra")("hmener")
console.log(myband);

// const distance = function(start){
//     // we have a closed scope here, but we'll return a function that
//     //  can access it - effectively creating a "closure".
//     return function(end){
//       // now, in this function, we have everything we need. we can do
//       //  the calculation and return the result.
//       return Math.sqrt( Math.pow(end.x-start.x, 2) + Math.pow(end.y-start.y, 2) );
//     }
//   }

const distance = (start, end) => Math.sqrt( Math.pow(end.x-start.x, 2) + Math.pow(end.y-start.y, 2) );

console.log(distance( {x:2, y:2}, {x:11, y:8}))

const distancewithCurrying = (start) => (end) =>
  Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

  console.log(distancewithCurrying( {x:3, y:2}, {x:11, y:5}))