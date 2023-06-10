

const G = 6.373e-11;
const radius = 6.38e6;
const mass = 5.98e24;
const h = 400000;

let acceleration = G*mass/(radius+h)**2;

console.log("acceleration = " + acceleration )



