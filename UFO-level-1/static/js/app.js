// Pulls data from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//get a reference for the table body
var tbody = d3.select("tbody");

//Loop through each object in dataset and then loop through the keys and values and add the values to the cells
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
    //Prevent page from refreshing
    d3.event.preventDefault();
    
    var dateEl = d3.select("#datetime");
    var inputdate = dateEl.property("value");
    
    var filterDate = tableData.filter(date => date.datetime === inputdate);
    tbody.html("");
    
    //Create new table based on filtered data
    filterDate.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
   });
});
};