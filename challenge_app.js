// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}



let inputs = document.querySelectorAll("input")
console.log(inputs)
inputs.forEach(function(input) {
  input.addEventListener("change" , function(event) {
      console.log(event.target.value)
      let attr = event.target.getAttribute("id")
      let filteredInput = tableData.filter(function(item){
        return item[attr] === event.target.value.toLowerCase()
        
        
      })
      buildTable(filteredInput)
    })

})

  
  // Build the table when the page loads
  buildTable(tableData);
