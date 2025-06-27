interface Car {
    make: string;
    model: string;
}

type Bus = {
    make:string
    model:string
    payloadCapacity:number
};

type vehicle = Car | Bus;

const mycar = {make: "Toyota", model: "corolla"};
const mybus = {make: "Mercedes", model: "sprinter", payloadCapacity: 2000};


const myvehicle1: vehicle = mycar;
const myvehicle2: vehicle = mybus;
console.log(mycar);
console.log(mybus);

