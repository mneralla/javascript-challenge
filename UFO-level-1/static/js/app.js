// Pulls data from data.js
var tableData = data;

//Gets reference for the table body
var tbody = d3.select("tbody");

//Loops through each object in the dataset, then will loop through keys and values to add values in cells
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

//Listens for events and searches the `date/time` column to find rows matching user input.
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
    //Prevents page from refreshing
    d3.event.preventDefault();
    
    var dateEl = d3.select("#datetime");
    var inputdate = dateEl.property("value");
    
    var filterDate = tableData.filter(date => date.datetime === inputdate);
    tbody.html("");
    
    //Creates a table for filtered data
    filterDate.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
   });
});
};