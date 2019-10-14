// document.getElementById("senate-data").innerHTML = JSON.stringify(data, null, 2);
let arrayOfMembersOfTheSenate = data.results //change the variable name to universal

// console.log(arrayOfMembersOfTheSenate[0].members[2].first_name)

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
        results.innerHTML += "<tr><td>" + "<a href='" + members[member].url + "'>" + members[member].first_name + ' ' + members[member].middle_name + " " + members[member].last_name + " </a>" + "</td><td>" +
            members[member].party + "</td><td>" +
            members[member].state + "</td><td>" +
            members[member].seniority + "</td><td>" +
            members[member].votes_with_party_pct + " %" + "</td></tr>";

    }
}

window.onload = table();

//The button to show more or less text
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


// let republicanarray = [];
// let democratarray = [];
// let independentarray = [];

// for (let member in members) {
//     //Loop through the object to get each objects data
//     if (members[member].party === "D") {
//         democratarray.push(members[member])
//     } else if (members[member].party === "I") {
//         independentarray.push(members[member])

//     } else if (members[member].party === "R") {
//         republicanarray.push(members[member])
//     }
// };




//To filter the array

// function table() {
//     let republican = document.querySelector('#republican')
//     republican.addEventListener("click", function () {
//         if (republican.checked) {
//             for (var member in republicanarray) {
//                 if (republicanarray[member].middle_name == null) {
//                     republicanarray[member].middle_name = ""
//                 }
//                 //Loop through republicanarray array to get each member data and populate the table
//                 results.innerHTML += "<tr><td>" + "<a href='" + republicanarray[member].url + "'>" + republicanarray[member].first_name + ' ' + republicanarray[member].middle_name + " " + republicanarray[member].last_name + " </a>" + "</td><td>" +
//                     republicanarray[member].party + "</td><td>" +
//                     republicanarray[member].state + "</td><td>" +
//                     republicanarray[member].seniority + "</td><td>" +
//                     republicanarray[member].votes_with_party_pct + " %" + "</td></tr>";

//             }
//         }
//     })


// }

// window.onload = table();

//Filtering works for the republican can we create a global variable called a new array and push stuff inside each time? 


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