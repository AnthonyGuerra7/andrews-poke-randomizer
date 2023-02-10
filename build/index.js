"use strict";
/**
 * Pokemon starter choices this is an array that holds which type to use during your playthrough
 * The options are currently Grass, Fire, Water, and unfortantely None.
 */
let starterChoices = ["Grass", "Fire", "Water", "None"];
/**
 * This is an array that holds how many Pokemon you are allowed to use excluding an HM Slave. The
 * choices are 2, 3, and 4.
 */
let teamSize = [2, 3, 4];
/**
 * This is an array that holds an array with distinct pairs of all Pokemon types without repeating types.
 * All the pokemon types are:
 * Fire, Water, Grass, Electric, Normal, Ghost,
 * Dark, Psychic, Ground, Rock, Steel, Ice,
 * Dragon, Fighting, Fairy, Bug, Poison, Flying
 */
let typePairs = [];
let addedPairs = new Set();
let types = ["Fire", "Water", "Grass", "Electric", "Normal", "Ghost",
    "Dark", "Psychic", "Ground", "Rock", "Steel", "Ice",
    "Dragon", "Fighting", "Fairy", "Bug", "Poison", "Flying"];
let values = { "type1": "", "type2": "" };
/* arr[]  ---> Input Array
data[] ---> Temporary array to store current combination
start & end ---> Starting and Ending indexes in arr[]
index  ---> Current index in data[]
r ---> Size of a combination to be printed */
function combinationUtil() {
    for (let i = 0; i < types.length; i++) {
        for (let j = i + 1; j < types.length; j++) {
            let pair = [types[i], types[j]].sort().join(",");
            if (!addedPairs.has(pair)) {
                typePairs.push([types[i], types[j]]);
                addedPairs.add(pair);
            }
        }
    }
}
combinationUtil();
//  console.log(JSON.stringify(typePairs));
let randomTypePairIndex = Math.floor(Math.random() * typePairs.length);
let randomTypeArray = typePairs[randomTypePairIndex];
let randomStarterIndex = Math.floor(Math.random() * starterChoices.length);
let randomStarterArray = starterChoices[randomStarterIndex];
let randomTeamSizeIndex = Math.floor(Math.random() * teamSize.length);
let randomTeamSizeArray = teamSize[randomTeamSizeIndex];
console.log("Your random starter is: " + randomStarterArray);
console.log("Your random team size is: " + randomTeamSizeArray);
console.log("Your random type pair is: " + randomTypeArray);
