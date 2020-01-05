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
function statisticsObjec(members) {
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
}




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


//Senate at a glance


let percentageForTotalPartyMembers = []
let averagePercentageForTotalPartyMembers = []
for (let member in members) {
    percentageForTotalPartyMembers.push(members[member].votes_with_party_pct)
}
averagePercentageForTotalPartyMembers = percentageForTotalPartyMembers.reduce((a, b) => a + b, 0) / percentageForTotalPartyMembers.length

let tableBody6 = document.getElementById("senate-attendance");


function AtGlancetable() {

    tableBody6.innerHTML += "<tr><td>" +
        "Republican" + "</td><td>" + statistics.numberOfRepublicans.length + "</td><td>" + averagePercentageForRepublicans.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Democrats" + "</td><td>" + statistics.numberOfDemocrats.length + "</td><td>" + averagePercentageForDemocrats.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Independents" + "</td><td>" + statistics.numberOfIndependents.length + "</td><td>" + averagePercentageForIndependents.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Total" + "</td><td>" + percentageForTotalPartyMembers.length + "</td><td>" + averagePercentageForTotalPartyMembers.toFixed(2) + " %" + "</td></tr>"
}

AtGlancetable();

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



function mostEngagedTable() {
    let tableBodyTwo = document.getElementById("most-engaged");

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

mostEngagedTable();


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

leastEngagedTable();



////////////////////////////////

// Find the most loyal 


let topTenPercentVotesWithParty = [];

function loyalUpperTopTen() {
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1)) {
            topTenPercentVotesWithParty.push(sorted[member])
        } else if (sorted[member] == sorted[member - 1]) {
            topTenPercentVotesWithParty.push(sorted[member]);
        }

        for (let i = 0; i < topTenPercentVotesWithParty.length; i++) {}
    }
}




loyalUpperTopTen();

let tableBodyFour = document.getElementById("most-loyal");


function mostLoyaTable() {
    for (let member in topTenPercentVotesWithParty) {
        if (topTenPercentVotesWithParty[member].middle_name == null) {
            topTenPercentVotesWithParty[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBodyFour.innerHTML += "<tr><td>" + "<a href='" + topTenPercentVotesWithParty[member].url + "'>" + topTenPercentVotesWithParty[member].first_name + ' ' + topTenPercentVotesWithParty[member].middle_name + " " + topTenPercentVotesWithParty[member].last_name + " </a>" + "</td><td>" +
            topTenPercentVotesWithParty[member].total_votes + "</td><td>" +
            topTenPercentVotesWithParty[member].votes_with_party_pct + " %" + "</td>"
    }
}

mostLoyaTable();



let bottomTenPercentVotesWithParty = [];

function loyalLowerTopTen() {
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct;
    })
    console.log(sorted)

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1)) {
            bottomTenPercentVotesWithParty.push(sorted[member])
        } else if (sorted[member] == sorted[member - 1]) {
            bottomTenPercentVotesWithParty.push(sorted[member]);
        }

        for (let i = 0; i < bottomTenPercentVotesWithParty.length; i++) {
            console.log(bottomTenPercentVotesWithParty[i].first_name)
        }
    }
}

loyalLowerTopTen()

let tableBodyFive = document.getElementById("least-loyal");


function leastLoyalTable() {
    for (let member in bottomTenPercentVotesWithParty) {
        if (bottomTenPercentVotesWithParty[member].middle_name == null) {
            bottomTenPercentVotesWithParty[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBodyFive.innerHTML += "<tr><td>" + "<a href='" + bottomTenPercentVotesWithParty[member].url + "'>" + bottomTenPercentVotesWithParty[member].first_name + ' ' + bottomTenPercentVotesWithParty[member].middle_name + " " + bottomTenPercentVotesWithParty[member].last_name + " </a>" + "</td><td>" +
            bottomTenPercentVotesWithParty[member].total_votes + "</td><td>" +
            bottomTenPercentVotesWithParty[member].votes_with_party_pct + " %" + "</td>"
    }
}

leastLoyalTable();