var statistics = {
    numberOfDemocrats: [],
    numberOfIndependents: [],
    numberOfRepublicans: [],
    percentOfDemo: [],
    percentOfInde: [],
    percentOfRep: [],
    percentOfTotal: [],
}

console.log(members)

for (let member in members) {
    //Loop through the object to get each objects data
    if (members[member].party === "D") {
        statistics.numberOfDemocrats.push(members[member])
    } else if (members[member].party === "I") {
        statistics.numberOfIndependents.push(members[member])
    } else if (members[member].party === "R") {
        statistics.numberOfRepublicans.push(members[member])
    }
};



// Find average % Voted with Party For Demo
for (let member in statistics.numberOfDemocrats) {
    statistics.percentOfDemo.push(statistics.numberOfDemocrats[member].votes_with_party_pct)
}
console.log(
    statistics.percentOfDemo.reduce((a, b) => a + b, 0) / statistics.percentOfDemo.length
)

// Find average % Voted with Party For Independents
for (let member in statistics.numberOfIndependents) {
    statistics.percentOfInde.push(statistics.numberOfIndependents[member].votes_with_party_pct)
}
console.log(
    statistics.percentOfInde.reduce((a, b) => a + b, 0) / statistics.percentOfInde.length
)

// Find average % Voted with Party For Rep
for (let member in statistics.numberOfRepublicans) {
    statistics.percentOfRep.push(statistics.numberOfRepublicans[member].votes_with_party_pct)
}
console.log(
    statistics.percentOfRep.reduce((a, b) => a + b, 0) / statistics.percentOfRep.length
)

// Find average % Voted for Total

for (let member in members) {
    statistics.percentOfTotal.push(members[member].votes_with_party_pct)
}
console.log(
    statistics.percentOfTotal.reduce((a, b) => a + b, 0) / statistics.percentOfTotal.length
)