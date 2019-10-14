let statistics = {
    numberOfDemocrats: [],
    numberOfIndependents: [],
    numberOfRepublicans: [],
    total: [],
    percentOfDemo: [],
    percentOfInde: [],
    percentOfRep: [],
    percentOfTotal: [],
    missedVotePercentage: [],
    votesWithPartyPct: [],
}



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


//To find the most engaged

function lowerTopTen() {
    for (let member in members) {
        statistics.missedVotePercentage.push(members[member].missed_votes_pct)
    }
    console.log(statistics.missedVotePercentage.sort())


    let bottomTenPercentOfMissedVotes = [];

    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return a.missed_votes_pct - b.missed_votes_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            bottomTenPercentOfMissedVotes.push(members[member])
    }
    console.log(bottomTenPercentOfMissedVotes)

    for (let i = 0; i < bottomTenPercentOfMissedVotes.length; i++) {
        console.log(bottomTenPercentOfMissedVotes[i].first_name)
    }

}

//find two things in the array, the percentage and the mix


lowerTopTen();

//To find the least engaged

function UpperTopTen() {
    for (let member in members) {
        statistics.missedVotePercentage.push(members[member].missed_votes_pct)
    }
    console.log(statistics.missedVotePercentage.sort())


    let bottomTenPercentOfMissedVotes = [];

    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            bottomTenPercentOfMissedVotes.push(members[member])
    }
    console.log(bottomTenPercentOfMissedVotes)

    for (let i = 0; i < bottomTenPercentOfMissedVotes.length; i++) {
        console.log(bottomTenPercentOfMissedVotes[i].first_name)
    }
}

UpperTopTen();



function loyalUpperTopTen() {
    // for (let member in members) {
    //     statistics.missedVotePercentage.push(members[member].missed_votes_pct)
    // }
    // console.log(statistics.missedVotePercentage.sort())


    let bottomTenPercentOfMissedVotes = [];

    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            bottomTenPercentOfMissedVotes.push(sorted[member])
    }
    console.log(bottomTenPercentOfMissedVotes)

    for (let i = 0; i < bottomTenPercentOfMissedVotes.length; i++) {
        console.log(bottomTenPercentOfMissedVotes[i].first_name)
    }
}


loyalUpperTopTen()


function loyalLowerTopTen() {
    let bottomTenPercentOfMissedVotes = [];

    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1)) {
            bottomTenPercentOfMissedVotes.push(sorted[member])
        } else if (sorted[member] == sorted[member - 1]) {
            bottomTenPercentOfMissedVotes.push(sorted[member]);
        }
        console.log(bottomTenPercentOfMissedVotes)

        for (let i = 0; i < bottomTenPercentOfMissedVotes.length; i++) {
            console.log(bottomTenPercentOfMissedVotes[i].first_name)
        }
    }

}

loyalLowerTopTen();





//To find the most loyal

// function upperTopTenLoyal () {
//     let loyalUpperTopTen = [];

//     sortMembers = members

//     sorted = sortMembers.sort(function (a, b) {
//         return b.votes_with_party_pct - a.votes_with_party_pct;
//     })

//     console.log(sorted)

//     for (member in sorted) {
//         if (member < ((sorted.length) * 0.1)) {
//             loyalUpperTopTen.push(sorted[member])
//         }
//         console.log(loyalUpperTopTen)

//         for (let i = 0; i < loyalUpperTopTen.length; i++) {
//             console.log(loyalUpperTopTen[i].first_name)
//         }
//     }
// }

// // } else if (members[member] == members[member - 1]) {
// //     loyalUpperTopTen.push(members[member]);


// upperTopTenLoyal();


//To find the least loyal

function lowerTopTenLoyal() {
    let loyaLowerTopTen = [];

    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct;
    })
    console.log(sorted)


}

//     for (member in members) {
//         if (member < ((sorted.length) * 0.1)) {
//             loyaLowerTopTen.push(members[member])
//         }
//         for (let i = 0; i < loyaLowerTopTen.length; i++) {
//             console.log(loyaLowerTopTen[i].first_name)
//         }
//     }
// }


lowerTopTenLoyal();


























// function bottomTenPercentOfMissedVotes() { //least engaged
//     var votes = [];
//     var lowestTenPercent = [];
//     members.sort(function (a, b) {
//         return a.missed_votes_pct - b.missed_votes_pct;
//     });
//     for (i = 0; i < members.length; i++) {
//         votes.push(members[i]);
//     }

//     for (i = 0; i < votes.length; i++) {
//         if (i < ((votes.length) * 0.1)) {
//             lowestTenPercent.push(votes[i]);
//         } else if (votes[i] == votes[i - 1]) {
//             lowestTenPercent.push(votes[i]);
//         } else {
//             break;
//         }
//     }
//     return lowestTenPercent;
// }









console.log(statistics.numberOfDemocrats.length) //210
console.log(statistics.numberOfIndependents.length) //0
console.log(statistics.numberOfRepublicans.length) //240



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

console.log(statistics.numberOfIndependents)

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

//Find the total Party Members



// Find average % Voted for Total

for (let member in members) {
    statistics.percentOfTotal.push(members[member].votes_with_party_pct)
}
console.log(
    statistics.percentOfTotal.reduce((a, b) => a + b, 0) / statistics.percentOfTotal.length)