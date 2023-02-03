// Fetch the data from the data.json file
fetch("data.json")
  .then(response => response.json())
  .then(jobListings => {
    // Get the table element from the HTML
    var table = document.querySelector("table tbody");

    // Loop through the job listings data
    jobListings.forEach(jobListing => {
      // Create a new row for the job listing
      var row = document.createElement("tr");

      // Create the cells for the job type and location
      var jobTypeCell = document.createElement("td");
      jobTypeCell.textContent = jobListing.jobType;
      var locationCell = document.createElement("td");
      locationCell.textContent = jobListing.location;

      // Create the cell for the apply button
      var applyCell = document.createElement("td");
      var applyButton = document.createElement("button");
      applyButton.textContent = "Apply";
      applyButton.addEventListener("click", function() {
        window.location.href = jobListing.applyLink;
      });
      applyCell.appendChild(applyButton);

      // Add the cells to the row
      row.appendChild(jobTypeCell);
      row.appendChild(locationCell);
      row.appendChild(applyCell);

      // Add the row to the table
      table.appendChild(row);
    });
  });
