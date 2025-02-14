document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar valores del formulario
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    // Crear una nueva fila en la tabla
    let tableBody = document.getElementById("productTableBody");
    let newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>$${price}</td>
        <td>${category}</td>
        <td>${description}</td>
    `;

    // Limpiar el formulario
    document.getElementById("productForm").reset();
});
