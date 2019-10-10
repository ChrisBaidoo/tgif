// document.getElementById("senate-data").innerHTML = JSON.stringify(data, null, 2);
let arrayOfMembersOfTheSenate = data.results

console.log(arrayOfMembersOfTheSenate[0].members[2].first_name)

let members = arrayOfMembersOfTheSenate[0].members

console.log(members)


var results = document.getElementById("tabledata");
console.log(results)

function table() {
    for (var member in members) {
        if (members[member].middle_name == null) {
            members[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        results.innerHTML += "<tr><td>" + members[member].first_name + " " + members[member].middle_name + " " + members[member].last_name + "</td><td>" +
            members[member].party + "</td><td>" +
            members[member].state + "</td><td>" +
            members[member].seniority + "</td><td>" +
            members[member].votes_with_party_pct + " %" + "</td></tr>";

    }
}

window.onload = table();

function showMoreOrLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

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


// document.write('table');
// document.write('<tr><th>Senator</th></tr>');

// for (let i = 0; i < members.length; i++) {
//     document.createElement('<tr><td>' + members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name + '</td></tr>')

//     document.createElement('<tr><td>' + members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name + '</td></tr>')
//     fullname.push(members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name);
//     party.push(members[i].party)
//     state.push(members[i].state)
//     seniority.push(members[i].seniority)
//     percentage.push(members[i].votes_with_party_pct + " %")
// }


// window.onload = () => {
//     loadTableData(tableData)
// }


// function loadTableData(members) {
//     let tableBody = document.getElementById("tableData");
//     let dataHtml = "";
//     members.forEach(loadMember(member))
// };
// loadTableData(members);

// function loadMember(member) {
//     dataHtml += `<tr><td>${member.party}</td><td></td></tr>`
//     console.log(dataHtml);