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