"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestePh_1 = require("./objetcs/TestePh");
let teste1 = new TestePh_1.TestePh("Primocão Carne", 6.99, 14, 34);
console.log(teste1);

console.log(teste1.getHoraTeste);
console.log(teste1.setValorPh(6.1));
console.log(teste1.retornaAcidez());