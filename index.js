"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function createArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + 1);
    }
    return arr;
}
function analyzeArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            result[i] = "BIG BANG";
        }
        else if (typeof arr[i] === "number" && arr[i] % 3 === 0) {
            result[i] = "BIG";
        }
        else if (typeof arr[i] === "number" && arr[i] % 5 === 0) {
            result[i] = "BANG";
        }
        else {
            result[i] = arr[i];
        }
    }
    return result;
}
const script = createArray();
console.log(script);
const analyzedArray = analyzeArray(script);
console.log(analyzedArray);
const jsonData = JSON.stringify(analyzedArray, null, 2);
fs.writeFileSync("output.json", jsonData, "utf8");
console.log("Data has been written to output.json");
