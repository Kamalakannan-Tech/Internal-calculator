function calculateInternal() {
    // Fetch input values
    const fat1 = parseFloat(document.getElementById("fat1").value);
    const fat2 = parseFloat(document.getElementById("fat2").value);
    const fat3 = parseFloat(document.getElementById("fat3").value);
    const ass1 = parseFloat(document.getElementById("ass1").value);
    const ass2 = parseFloat(document.getElementById("ass2").value);
    const ass3 = parseFloat(document.getElementById("ass3").value);

    // Calculate internal marks
    const internal = (
        (fat1 * 0.6 + ass1 * 0.4) +
        (fat2 * 0.6 + ass2 * 0.4) +
        (fat3 * 0.6 + ass3 * 0.4)
    ) / 3;

    const final = (internal / 50) * 40;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `Internal Marks: ${final.toFixed(2)}`;
}