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


//Sort the Democrats, Independents and Republicans
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

let tableBody = document.getElementById("senate-attendance");


// Find average % Voted with Party For Demo
let percentageForDemocrats = []
let averagePercentageForDemocrats = []
for (let member in statistics.numberOfDemocrats) {
    percentageForDemocrats.push(statistics.numberOfDemocrats[member].votes_with_party_pct)
}

averagePercentageForDemocrats = percentageForDemocrats.reduce((a, b) => a + b, 0) / percentageForDemocrats.length


// Find average % Voted with Party For Independents

let percentageForIndenpendents = []
let averagePercentageForIndependents = []
for (let member in statistics.numberOfIndependents) {
    percentageForIndenpendents.push(statistics.numberOfIndependents[member].votes_with_party_pct)
}

averagePercentageForIndependents = percentageForIndenpendents.reduce((a, b) => a + b, 0) / percentageForIndenpendents.length


// Find average % Voted with Party For Republicans 
let percentageForRepublicans = []
let averagePercentageForRepublicans = []
for (let member in statistics.numberOfRepublicans) {
    percentageForRepublicans.push(statistics.numberOfRepublicans[member].votes_with_party_pct)
    averagePercentageForRepublicans = percentageForRepublicans.reduce((a, b) => a + b, 0) / percentageForRepublicans.length
}


//Find the total Party Members

let percentageForTotalPartyMembers = []
let averagePercentageForTotalPartyMembers = []
for (let member in members) {
    percentageForTotalPartyMembers.push(members[member].votes_with_party_pct)
}
averagePercentageForTotalPartyMembers = percentageForTotalPartyMembers.reduce((a, b) => a + b, 0) / percentageForTotalPartyMembers.length



function table() {
    tableBody.innerHTML += "<tr><td>" +
        "Republican" + "</td><td>" + statistics.numberOfRepublicans.length + "</td><td>" + averagePercentageForRepublicans.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Democrats" + "</td><td>" + statistics.numberOfDemocrats.length + "</td><td>" + averagePercentageForDemocrats.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Independents" + "</td><td>" + statistics.numberOfIndependents.length + "</td><td>" + averagePercentageForIndependents.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Total" + "</td><td>" + percentageForTotalPartyMembers.length + "</td><td>" + averagePercentageForTotalPartyMembers.toFixed(2) + " %" + "</td></tr>"
}


window.onload = table();

////////////////////////////////////////////////////////////////

// //To find the most engaged

let bottomTenPercentOfMissedVotes = [];
let topTenPercentOfMissedVotes = [];



function lowerTopTen() {
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

lowerTopTen();

let tableBodyTwo = document.getElementById("most-engaged");


function mostEngagedTable() {
    for (let member in bottomTenPercentOfMissedVotes) {
        if (bottomTenPercentOfMissedVotes[member].middle_name == null) {
            bottomTenPercentOfMissedVotes[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBodyTwo.innerHTML += "<tr><td>" + "<a href='" + bottomTenPercentOfMissedVotes[member].url + "'>" + bottomTenPercentOfMissedVotes[member].first_name + ' ' + bottomTenPercentOfMissedVotes[member].middle_name + " " + bottomTenPercentOfMissedVotes[member].last_name + " </a>" + "</td><td>" +
            bottomTenPercentOfMissedVotes[member].missed_votes + "</td><td>" +
            bottomTenPercentOfMissedVotes[member].missed_votes_pct + " %" + "</td>"
    }
}

window.onload = mostEngagedTable();


///////////////////////////////////////////////////////
// //To find the least engaged


function UpperTopTen() {
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            topTenPercentOfMissedVotes.push(members[member])
    }
    console.log(topTenPercentOfMissedVotes)

    for (let i = 0; i < topTenPercentOfMissedVotes.length; i++) {
        console.log(topTenPercentOfMissedVotes[i].first_name)
    }
}

UpperTopTen();

let tableBodyThree = document.getElementById("least-engaged");


function leastEngagedTable() {
    for (let member in topTenPercentOfMissedVotes) {
        if (topTenPercentOfMissedVotes[member].middle_name == null) {
            topTenPercentOfMissedVotes[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBodyThree.innerHTML += "<tr><td>" + "<a href='" + topTenPercentOfMissedVotes[member].url + "'>" + topTenPercentOfMissedVotes[member].first_name + ' ' + topTenPercentOfMissedVotes[member].middle_name + " " + topTenPercentOfMissedVotes[member].last_name + " </a>" + "</td><td>" +
            topTenPercentOfMissedVotes[member].missed_votes + "</td><td>" +
            topTenPercentOfMissedVotes[member].missed_votes_pct + " %" + "</td>"
    }
}

window.onload = leastEngagedTable();



////////////////////////////////

// Find the most loyal 

let bottomTenPercentOfVotesWithParty = [];


function loyalUpperTopTen() {
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;
    })
    console.log(sorted)


    for (member in sorted) {
        if (member < ((sorted.length) * 0.1)) {
            bottomTenPercentOfVotesWithParty.push(sorted[member])
        } else if (sorted[member] == sorted[member - 1]) {
            bottomTenPercentOfVotesWithParty.push(sorted[member]);
        }
        console.log(bottomTenPercentOfVotesWithParty)
    }
}


loyalUpperTopTen();

let tableBodyFour = document.getElementById("least-loyal");


function mostLoyaTable() {
    for (let member in bottomTenPercentOfVotesWithParty) {
        if (bottomTenPercentOfVotesWithParty[member].middle_name == null) {
            bottomTenPercentOfVotesWithParty[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBodyFour.innerHTML += "<tr><td>" + "<a href='" + bottomTenPercentOfVotesWithParty[member].url + "'>" + bottomTenPercentOfVotesWithParty[member].first_name + ' ' + bottomTenPercentOfVotesWithParty[member].middle_name + " " + bottomTenPercentOfVotesWithParty[member].last_name + " </a>" + "</td><td>" +
            bottomTenPercentOfVotesWithParty[member].missed_votes + "</td><td>" +
            bottomTenPercentOfVotesWithParty[member].missed_votes_pct + " %" + "</td>"
    }
}

window.onload = mostLoyaTable();


// loyalUpperTopTen()