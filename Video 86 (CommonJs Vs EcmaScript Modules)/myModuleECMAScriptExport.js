//there are 2 types of exports: default export and named export

export const a = 1;   //named export
export const b = 2;
export const c = 3;
export const d = 4;
export const e = 5;

//this will cause as error. obj needs to be declared before being exported.
// export default obj = {       //defualt export
//     x: 5,
//     y: 7
// };

// This ensures obj is declared before being exported.
const obj = { x: 5, y: 7 };
export default obj;


//these could have been function, modules, objects, constant, anything...were just exporitng them