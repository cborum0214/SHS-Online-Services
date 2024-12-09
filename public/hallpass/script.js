document.addEventListener("DOMContentLoaded", () => {
    const hallPassForm = document.getElementById("hallPassForm");
    const logTableBody = document.querySelector("#logTable tbody");
    const transactionLog = [];

    hallPassForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Gather form data
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const location = document.getElementById("location").value;
        const status = document.getElementById("status").value;
        const timestamp = new Date().toLocaleString();

        // Create a log entry
        const logEntry = { firstName, lastName, location, status, timestamp };
        transactionLog.push(logEntry);

        // Display the entry in the table
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${logEntry.firstName}</td>
            <td>${logEntry.lastName}</td>
            <td>${logEntry.location}</td>
            <td>${logEntry.status}</td>
            <td>${logEntry.timestamp}</td>
        `;
        logTableBody.appendChild(row);

        // Reset the form
        hallPassForm.reset();
    });
});
