import * as fs from "fs";

function createArray(): (number)[] {
    let arr: (number)[] = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i+1);
    }
    return arr;
}

function analyzeArray(arr: (number)[]): (number | string)[] {
    let result: (number | string)[] = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number" && arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            result[i] = "BIG BANG";
        }
        else if (typeof arr[i] === "number" && arr[i] % 3 === 0) {
            result[i] = "BIG";
        }
        else if (typeof arr[i] === "number" && arr[i] % 5 === 0) {
            result[i] = "BANG";
        }   
        else{
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