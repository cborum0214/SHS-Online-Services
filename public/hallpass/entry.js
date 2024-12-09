document.addEventListener("DOMContentLoaded", () => {
    const hallPassForm = document.getElementById("hallPassForm");

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

        // Save the entry in localStorage
        const transactionLog = JSON.parse(localStorage.getItem("transactionLog")) || [];
        transactionLog.push(logEntry);
        localStorage.setItem("transactionLog", JSON.stringify(transactionLog));

        // Reset the form
        hallPassForm.reset();

        alert("Transaction logged successfully!");
    });
});
