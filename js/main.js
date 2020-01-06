let senateUrl = "https://api.propublica.org/congress/v1/113/senate/members.json";
let houseUrl = "https://api.propublica.org/congress/v1/113/house/members.json";
let republican = document.querySelector('#republican');
let democrats = document.querySelector('#democrat')
let independents = document.querySelector('#independent')
let states = document.querySelector('#select-filter')

let members = []

function getRemoteData() {
    if (window.location.href.includes("senate")) {
        fetch(senateUrl, {
                method: "GET",
                headers: {
                    "X-API-KEY": "OdeIWHVS79FjwzPuKFKPZxCPNs5BSsV6HUdenZHz"
                }
            }).then(function (response) {
                return response.json();
            })
            .then((data) => {
                members = data.results[0].members;
                buildSenatorPage(members)
                document.getElementById("loader").style.display = "none";
            });

    } else if (window.location.href.includes("house")) {
        fetch(houseUrl, {
                method: "GET",
                headers: {
                    "X-API-KEY": "OdeIWHVS79FjwzPuKFKPZxCPNs5BSsV6HUdenZHz"
                }
            }).then(function (response) {
                return response.json();
            })
            .then((data) => {
                members = data.results[0].members;
                buildHousePage(members)
                document.getElementById("loader").style.display = "none";
            });
    }
}

getRemoteData()

//Build the senate table 
function buildSenatorPage(members) {
    if (window.location.href.includes("senate-data")) {
        document.getElementById("tabledata").innerHTML =
            buildChamberTable(members)
        listOfStates()
    } else if (window.location.href.includes("senate-attendance")) {
        document.getElementById("senate-attendance").innerHTML =
            buildChamberGlance(members)

        document.getElementById("most-engaged").innerHTML =
            buildMostEngaged(members)

        document.getElementById("least-engaged").innerHTML =
            buildLeastEngaged(members)

    } else if (window.location.href.includes("senate-party-loyalty")) {
        document.getElementById("senate-attendance").innerHTML =
            buildChamberGlance(members)
        document.getElementById("most-loyal").innerHTML =
            buildMostLoyalTable(members)

        document.getElementById("least-loyal").innerHTML =
            buildLeastLoyalTable(members)
    }
}


//Build the house table 
function buildHousePage(members) {
    if (window.location.href.includes("house-data")) {
        document.getElementById("tabledata").innerHTML =
            buildChamberTable(members)
        listOfStates()
    } else if (window.location.href.includes("house-attendance")) {
        document.getElementById("house-attendance").innerHTML =
            buildChamberGlance(members)

        document.getElementById("most-engaged").innerHTML =
            buildMostEngaged(members)

        document.getElementById("least-engaged").innerHTML =
            buildLeastEngaged(members)
    } else if (window.location.href.includes("house-party-loyalty")) {
        document.getElementById("senate-attendance").innerHTML =
            buildChamberGlance(members)
        document.getElementById("most-loyal").innerHTML =
            buildMostLoyalTable(members)
        document.getElementById("least-loyal").innerHTML =
            buildLeastLoyalTable(members)
    }

}


//Build the senate at glance table
function buildChamberGlance(members) {
    let table = ""
    let chamberStatistics = statisticsObject(members)

    // Find average % Voted with Party For Demo

    let percentageForDemocrats = []
    let averagePercentageForDemocrats = []

    for (let member in chamberStatistics.numberOfDemocrats) {
        percentageForDemocrats.push(chamberStatistics.numberOfDemocrats[member].votes_with_party_pct)
    }
    averagePercentageForDemocrats = percentageForDemocrats.reduce((a, b) => a + b, 0) / percentageForDemocrats.length


    // Find average % Voted with Party For Independents
    let percentageForIndenpendents = []
    let averagePercentageForIndependents = []

    for (let member in chamberStatistics.numberOfIndependents) {
        percentageForIndenpendents.push(chamberStatistics.numberOfIndependents[member].votes_with_party_pct)
    }

    averagePercentageForIndependents = percentageForIndenpendents.reduce((a, b) => a + b, 0) / percentageForIndenpendents.length

    averagePercentageForIndependents = averagePercentageForIndependents || 0


    // Find average % Voted with Party For Republicans
    let percentageForRepublicans = []
    let averagePercentageForRepublicans = []

    for (let member in chamberStatistics.numberOfRepublicans) {
        percentageForRepublicans.push(chamberStatistics.numberOfRepublicans[member].votes_with_party_pct)
    }
    averagePercentageForRepublicans = percentageForRepublicans.reduce((a, b) => a + b, 0) / percentageForRepublicans.length


    //Find average % Voted for Total
    let percentageForTotalPartyMembers = []
    let averagePercentageForTotalPartyMembers = []
    for (let member in members) {
        percentageForTotalPartyMembers.push(members[member].votes_with_party_pct)
    }
    averagePercentageForTotalPartyMembers = percentageForTotalPartyMembers.reduce((a, b) => a + b, 0) / percentageForTotalPartyMembers.length

    averagePercentageForTotalPartyMembers = percentageForTotalPartyMembers.reduce((a, b) => a + b, 0) / percentageForTotalPartyMembers.length


    table += "<tr><td>" +
        "Republican" + "</td><td>" + chamberStatistics.numberOfRepublicans.length + "</td><td>" + averagePercentageForRepublicans.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Democrats" + "</td><td>" + chamberStatistics.numberOfDemocrats.length + "</td><td>" + averagePercentageForDemocrats.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Independents" + "</td><td>" + chamberStatistics.numberOfIndependents.length + "</td><td>" + averagePercentageForIndependents.toFixed(2) + " %" + "</td></tr>" +
        "<tr><td>" +
        "Total" + "</td><td>" + percentageForTotalPartyMembers.length + "</td><td>" + averagePercentageForTotalPartyMembers.toFixed(2) + " %" + "</td></tr>"
    return table
}

//Least Engaged (Bottom 10% Attendance)

function buildMostEngaged(members) {
    let table = ""
    sortMembers = members
    let bottomTenPercentOfMissedVotes = []

    sorted = sortMembers.sort(function (a, b) {
        return a.missed_votes_pct - b.missed_votes_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            bottomTenPercentOfMissedVotes.push(members[member])
    }

    for (let member in bottomTenPercentOfMissedVotes) {
        if (bottomTenPercentOfMissedVotes[member].middle_name == null) {
            bottomTenPercentOfMissedVotes[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        table += "<tr><td>" + "<a href='" + bottomTenPercentOfMissedVotes[member].url + "'>" + bottomTenPercentOfMissedVotes[member].first_name + ' ' + bottomTenPercentOfMissedVotes[member].middle_name + " " + bottomTenPercentOfMissedVotes[member].last_name + " </a>" + "</td><td>" +
            bottomTenPercentOfMissedVotes[member].missed_votes + "</td><td>" +
            bottomTenPercentOfMissedVotes[member].missed_votes_pct + " %" + "</td>"
    }
    return table;
}

function buildLeastEngaged() {
    let table = ""
    topTenPercentOfMissedVotes = [];
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return b.missed_votes_pct - a.missed_votes_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1))
            topTenPercentOfMissedVotes.push(members[member])
    }


    for (let member in topTenPercentOfMissedVotes) {
        if (topTenPercentOfMissedVotes[member].middle_name == null) {
            topTenPercentOfMissedVotes[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        table += "<tr><td>" + "<a href='" + topTenPercentOfMissedVotes[member].url + "'>" + topTenPercentOfMissedVotes[member].first_name + ' ' + topTenPercentOfMissedVotes[member].middle_name + " " + topTenPercentOfMissedVotes[member].last_name + " </a>" + "</td><td>" +
            topTenPercentOfMissedVotes[member].missed_votes + "</td><td>" +
            topTenPercentOfMissedVotes[member].missed_votes_pct + " %" + "</td>"
    }
    return table;
}

function statisticsObject(members) {
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
    //Populate Statistics 
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

    return statistics

}

function buildChamberTable(members) {
    let table = ''
    for (let member in members) {
        if (members[member].middle_name == null) {
            members[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        table += "<tr><td>" + "<a href='" + members[member].url + "'>" + members[member].first_name + ' ' + members[member].middle_name + " " + members[member].last_name + " </a>" + "</td><td>" +
            members[member].party + "</td><td>" +
            members[member].state + "</td><td>" +
            members[member].seniority + "</td><td>" +
            members[member].votes_with_party_pct + " %" + "</td></tr>";
    }
    return table
}

function buildMostLoyalTable(member) {
    let table = ""
    let topTenPercentVotesWithParty = [];
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
    }
    for (let member in topTenPercentVotesWithParty) {
        if (topTenPercentVotesWithParty[member].middle_name == null) {
            topTenPercentVotesWithParty[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        table += "<tr><td>" + "<a href='" + topTenPercentVotesWithParty[member].url + "'>" + topTenPercentVotesWithParty[member].first_name + ' ' + topTenPercentVotesWithParty[member].middle_name + " " + topTenPercentVotesWithParty[member].last_name + " </a>" + "</td><td>" +
            topTenPercentVotesWithParty[member].total_votes + "</td><td>" +
            topTenPercentVotesWithParty[member].votes_with_party_pct + " %" + "</td>"
    }
    return table;
}

function buildLeastLoyalTable(member) {
    let table = ""
    let topTenPercentVotesWithParty = [];
    sortMembers = members

    sorted = sortMembers.sort(function (a, b) {
        return a.votes_with_party_pct - b.votes_with_party_pct;
    })

    for (member in sorted) {
        if (member < ((sorted.length) * 0.1)) {
            topTenPercentVotesWithParty.push(sorted[member])
        } else if (sorted[member] == sorted[member - 1]) {
            topTenPercentVotesWithParty.push(sorted[member]);
        }

    }
    for (let member in topTenPercentVotesWithParty) {
        if (topTenPercentVotesWithParty[member].middle_name == null) {
            topTenPercentVotesWithParty[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        table += "<tr><td>" + "<a href='" + topTenPercentVotesWithParty[member].url + "'>" + topTenPercentVotesWithParty[member].first_name + ' ' + topTenPercentVotesWithParty[member].middle_name + " " + topTenPercentVotesWithParty[member].last_name + " </a>" + "</td><td>" +
            topTenPercentVotesWithParty[member].total_votes + "</td><td>" +
            topTenPercentVotesWithParty[member].votes_with_party_pct + " %" + "</td>"
    }
    return table;
}

function listOfStates() {

    let statesList = document.getElementById("select-filter")
    let arrayofStates = []

    for (let i = 0; i < members.length; i++) {
        arrayofStates.push(members[i].state)
    }

    let unique = arrayofStates.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    })

    for (var i = 0; i < unique.length; i++) {
        let states = document.createElement("option");
        states.value = unique[i];
        states.innerHTML = unique[i];
        statesList.appendChild(states)
    }
}

//Build  filter 
function filter() {
    let filteredArray = [];

    for (let i = 0; i < members.length; i++) {

        if (states.value == members[i].state || states.value == "all") {
            if (democrats.checked == true && members[i].party == "D") {
                filteredArray.push(members[i]);
            }
            if (republican.checked == true && members[i].party == "R") {
                filteredArray.push(members[i]);
            }
            if (independents.checked == true && members[i].party == "I") {
                filteredArray.push(members[i])
            } else if (independents.checked == false && republican.checked == false && democrats.checked == false) {
                filteredArray = members
            }
        }
    }
    return filteredArray;
}

democrats.addEventListener("click", function () {
    let filteredArray = filter();
    document.getElementById("tabledata").innerHTML = table(filteredArray)
});


republican.addEventListener("click", function () {
    let filteredArray = filter();
    document.getElementById("tabledata").innerHTML = table(filteredArray)
});


independents.addEventListener("click", function () {
    let filteredArray = filter();
    document.getElementById("tabledata").innerHTML = table(filteredArray)
});


states.addEventListener("change", function () {
    let filteredArray = filter();
    document.getElementById("tabledata").innerHTML = table(filteredArray)
});

function table(members) {
    let tableBody = ""

    for (let member in members) {
        if (members[member].middle_name == null) {
            members[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBody += "<tr><td>" + "<a href='" + members[member].url + "'>" + members[member].first_name + ' ' + members[member].middle_name + " " + members[member].last_name + " </a>" + "</td><td>" +
            members[member].party + "</td><td>" +
            members[member].state + "</td><td>" +
            members[member].seniority + "</td><td>" +
            members[member].votes_with_party_pct + " %" + "</td></tr>";
    }
    return tableBody
}

//Toggle button to show more or less text
function showMoreOrLess() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}