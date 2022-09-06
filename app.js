const fisrtArray = [[["html", "CSS"]], [["React JS", "Node JS"]], [["Firebase", "MongoDB"]]];

const copyArray = [...fisrtArray[1][0][1]];


console.log(fisrtArray);
console.log(copyArray);



const firstObj = {
    Mobile: {
        Iphone: {
            firstModel: "13pro",
            secondModel: "Xmax",
        },
        Samsung: {
            firstModel: "S21",
            secondModel: "S21 Edge",
        },
        Oppo: {
            firstModel: "Fs-20",
            secondModel: "F 31 pro",
        }
    }
}

const copyObj = { ...firstObj.Mobile.Samsung };

console.log(firstObj);
console.log(copyObj)