let arrayOfMembers = data.results


let members = arrayOfMembers[0].members




console.log(members)


let republican = document.querySelector('#republican');
let democrats = document.querySelector('#democrat')
let independents = document.querySelector('#independent')
let states = document.querySelector('#select-filter')

let state = document.querySelector('#state-filter')


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
            }
        }
    }
    return filteredArray;
}



filter();

democrats.addEventListener("click", function () {
    let filteredArray = filter();
    table(filter(filteredArray))
});

republican.addEventListener("click", function () {
    let filteredArray = filter();
    table(filteredArray)
});

independents.addEventListener("click", function () {
    let filteredArray = filter();
    table(filteredArray)
});

states.addEventListener("change", function () {
    let filteredArray = filter();
    table(filteredArray)
});


let tableBody5 = document.getElementById("tabledata");

function table(members) {
    tableBody5.innerHTML = ""
    for (let member in members) {
        if (members[member].middle_name == null) {
            members[member].middle_name = ""
        }
        //Loop through members array to get each member data and populate the table
        tableBody5.innerHTML += "<tr><td>" + "<a href='" + members[member].url + "'>" + members[member].first_name + ' ' + members[member].middle_name + " " + members[member].last_name + " </a>" + "</td><td>" +
            members[member].party + "</td><td>" +
            members[member].state + "</td><td>" +
            members[member].seniority + "</td><td>" +
            members[member].votes_with_party_pct + " %" + "</td></tr>";

    }
}


table(members);


function filterState() {

    let statesList = document.getElementById("select-filter")
    let arrayofStates = []

    for (let i = 0; i < members.length; i++) {
        arrayofStates.push(members[i].state)
    }

    let unique = arrayofStates.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    })
    console.log(unique.sort())

    for (var i = 0; i < unique.length; i++) {
        let states = document.createElement("option");
        states.value = unique[i];
        states.innerHTML = unique[i];
        statesList.appendChild(states)
    }

    var unique = members.map(item => item.state).filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    }).sort();
    console.log(unique)
}





































// function table() {
//     let republican = document.querySelector('#republican')
//     republican.addEventListener("click", function () {
//         if (republican.checked) {
//             for (let member in republicanarray) {
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

//     let democrats = document.querySelector('#democrat')
//     democrats.addEventListener("click", function () {
//         if (democrats.checked) {
//             for (let member in democratarray) {
//                 if (democratarray[member].middle_name == null) {
//                     democratarray[member].middle_name = ""
//                 }
//                 //Loop through democratarray array to get each member data and populate the table
//                 results.innerHTML += "<tr><td>" + "<a href='" + democratarray[member].url + "'>" + democratarray[member].first_name + ' ' + democratarray[member].middle_name + " " + democratarray[member].last_name + " </a>" + "</td><td>" +
//                     democratarray[member].party + "</td><td>" +
//                     democratarray[member].state + "</td><td>" +
//                     democratarray[member].seniority + "</td><td>" +
//                     democratarray[member].votes_with_party_pct + " %" + "</td></tr>";

//             }
//         }
//     })

//     let independents = document.querySelector('#independent')
//     independents.addEventListener("click", function () {
//         if (independents.checked) {
//             for (let member in independentarray) {
//                 if (independentarray[member].middle_name == null) {
//                     independentarray[member].middle_name = ""
//                 }
//                 //Loop through independentarray array to get each member data and populate the table
//                 results.innerHTML += "<tr><td>" + "<a href='" + independentarray[member].url + "'>" + independentarray[member].first_name + ' ' + independentarray[member].middle_name + " " + independentarray[member].last_name + " </a>" + "</td><td>" +
//                     independentarray[member].party + "</td><td>" +
//                     independentarray[member].state + "</td><td>" +
//                     independentarray[member].seniority + "</td><td>" +
//                     independentarray[member].votes_with_party_pct + " %" + "</td></tr>";

//             }
//         }
//     })













// function table() {
//     let republican = document.querySelector('#republican')
//     republican.addEventListener("change", function () {
//         if (republican.checked) {
//             console.log("holla")

//             for (let member in republicanarray) {
//                 if (republicanarray[member].middle_name == null) {
//                     republicanarray[member].middle_name = ""
//                 }
//                 //Loop through republicanarray array to get each member data and populate the table
//                 results.innerHTML += "<tr><td>" + "<a href='" + republicanarray[member].url + "'>" + republicanarray[member].first_name + ' ' + republicanarray[member].middle_name + " " + republicanarray[member].last_name + " </a>" + "</td><td>" +
//                     republicanarray[member].party + "</td><td>" +
//                     republicanarray[member].state + "</td><td>" +
//                     republicanarray[member].seniority + "</td><td>" +
//                     republicanarray[member].votes_with_party_pct + " %" + "</td></tr>";



// Write the javascript code that will filter the data by party:

// Get checked box values and put them into an array.
// Use that array to filter the list of members to pass to your
// function to create the table.
// Call this code whenever a checkbox is changed, i.e., use an onchanged event listener.






//Add checkbox filters 







// }

// window.onload = table();

//Filtering works for the republican can we create a global letiable called a new array and push stuff inside each time? 


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


//The button to show more or less text
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