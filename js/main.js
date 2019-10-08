// document.getElementById("senate-data").innerHTML = JSON.stringify(data, null, 2);
let arrayOfMembersOfTheSenate = data.results

console.log(arrayOfMembersOfTheSenate[0].members[2].first_name)

let members = arrayOfMembersOfTheSenate[0].members

console.log(members)
let fullname = [];
let party = [];
let state = [];
let seniority = [];
let percentage = [];

function table() {
    var results = document.getElementById("tabledata");

    // results.innerHTML += "<tr><td>User ID</td><td>First Name</td><td>Last Name</td><td>latitude</td><td>longitude</td></tr>";
    for (var obj in members) {
        //Loop through the object to get each objects data
        results.innerHTML += "<tr><td>" + members[obj].first_name + " " + members[obj].middle_name + " " + members[obj].last_name + "</td><td>" +
            members[obj].party + "</td><td>" +
            members[obj].state + "</td><td>" +
            members[obj].seniority + "</td><td>" +
            members[obj].votes_with_party_pct + " %" + "</td></tr>";
    }
}

window.onload = table();

function myFunction() {
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