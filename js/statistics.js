var statistics = {

    "Number of Democrats": [],
    "Number of Independents": [],
    "Number of Republicans": []
}

console.log(members)

for (let obj in members) {
    //Loop through the object to get each objects data
    if (members[obj].party === "D") {
        statistics["Number of Democrats"].push(members[obj])
    } else if (members[obj].party === "I") {
        statistics["Number of Independents"].push(members[obj])
    } else if (members[obj].party === "R") {
        statistics["Number of Republicans"].push(members[obj])
    }
};

let percentOfDemo = []
let percentOfInde = []
let percentOfRep = []
let percentOfTotal = []


// Find average % Voted with Party For Demo
for (let obj in statistics["Number of Democrats"]) {
    percentOfDemo.push(statistics["Number of Democrats"][obj].votes_with_party_pct)
}
console.log(
    percentOfDemo.reduce((a, b) => a + b, 0) / percentOfDemo.length
)

// Find average % Voted with Party For Independents
for (let obj in statistics["Number of Independents"]) {
    percentOfInde.push(statistics["Number of Independents"][obj].votes_with_party_pct)
}
console.log(
    percentOfInde.reduce((a, b) => a + b, 0) / percentOfInde.length
)

// Find average % Voted with Party For Rep
for (let obj in statistics["Number of Republicans"]) {
    percentOfRep.push(statistics["Number of Republicans"][obj].votes_with_party_pct)
}
console.log(
    percentOfRep.reduce((a, b) => a + b, 0) / percentOfRep.length
)

// Find average % Voted for Total

for (let obj in members) {
    percentOfTotal.push(members[obj].votes_with_party_pct)
}
console.log(
    percentOfTotal.reduce((a, b) => a + b, 0) / percentOfTotal.length
)