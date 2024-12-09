document.addEventListener("DOMContentLoaded", () => {
    const logTableBody = document.querySelector("#logTable tbody");

    // Retrieve the transaction log from localStorage
    const transactionLog = JSON.parse(localStorage.getItem("transactionLog")) || [];

    // Populate the table
    transactionLog.forEach((logEntry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${logEntry.firstName}</td>
            <td>${logEntry.lastName}</td>
            <td>${logEntry.location}</td>
            <td>${logEntry.status}</td>
            <td>${logEntry.timestamp}</td>
        `;
        logTableBody.appendChild(row);
    });
});
