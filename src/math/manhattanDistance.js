import {dungeonTilesPerFloor} from "./dungeonTiles";

export const getPossibleCombinations = (vectors) => {
    let resulting = [];
    console.log('possible combinations ', vectors);
    if (!vectors || !vectors.length) return resulting;
    for (let vector of vectors) {
        if (vector.length != 4) continue;
        let r = getCoordinatesAtDistance(vector);
        r = intersectWithDungeonTiles(r);
        if (!resulting.length) {
            resulting = r;
        } else {
            resulting = resulting.filter(e => r.find(l => l[0] == e[0] && l[1] == e[1] && l[2] == e[2]));
        }
    }
    console.log('result ', resulting);
    return resulting;
}

const getCoordinatesAtDistance = (vector) => {
    let result = [];
    if (!vector || vector.length == 0) return result;
    for (let z = 0; z < 100; z++) {
        for (let y = 0; y < 100; y++) {
            for (let x = 0; x < 100; x++) {
                let currentVector = [z, y, x];
                let sum = Math.abs(vector[2] - x) + Math.abs(vector[1] - y) + Math.abs(vector[0] - z);
                if (sum == vector[3]) {
                    result.push(currentVector)
                }
            }
        }
    }
    return result;
}

const intersectWithDungeonTiles = (possibleVectors) => {
    let resultingVectors = [];
    possibleVectors.forEach(currentVector => {
        const floor = currentVector[0];
        const x = currentVector[2];
        const y = currentVector[1];
        if (dungeonTilesPerFloor[floor][x] && dungeonTilesPerFloor[floor][x].find(yTile => yTile == y)) {
            resultingVectors.push(currentVector);
        }

    })
    return resultingVectors;
}

const intersect = (a, b) => {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}

// let x=[{z:29,y:64,x:61,dist:57},
//     {z:58,y:81,x:66,dist:18},
//     {z:39,y:65,x:66,dist:41},
//     {z:9,y:83,x:50,dist:69},
//     {z:0,y:50,x:50,dist:111}]

let x = [[29, 64, 61, 57],
    [58, 81, 66, 18],
    [39, 65, 66, 41],
    [9, 83, 50, 69],
    [0, 50, 50, 111]]
//let x=[[0,50,50,1],[0,51,50,0]]

//console.log(getPossibleCombinations(x));