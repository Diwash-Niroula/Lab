// ToyCar constructor to initialize properties for a toy car instance
function ToyCar(sku, upc, brand, model, color, packaging, scale, type, material, price, releaseDate, dimensions, weight, features) {
    this.sku = sku || "N/A";
    this.upc = upc || "N/A";
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.packaging = packaging;
    this.scale = scale;
    this.type = type;
    this.material = material;
    this.price = price;
    this.releaseDate = releaseDate;
    this.dimensions = dimensions;
    this.weight = weight;
    // Convert comma-separated features to an array
    this.features = features.split(',').map(feature => feature.trim());
}
// Function to create a new ToyCar instance from form inputs
function createCar() {
    // Retrieve values from the form
    const model = document.getElementById("model").value;
    const brand = document.getElementById("brand").value;
    const color = document.getElementById("color").value;
    const packaging = document.getElementById("packaging").value;
    const scale = document.getElementById("scale").value;
    const type = document.getElementById("type").value;
    const material = document.getElementById("material").value;
    const price = document.getElementById("price").value;
    const releaseDate = document.getElementById("releaseDate").value;
    const dimensions = document.getElementById("dimensions").value;
    const weight = document.getElementById("weight").value;
    const features = document.getElementById("features").value;

    // Create a new ToyCar instance with provided details
    const newCar = new ToyCar(
        "SKU001", "UPC001", brand, model, color, packaging,
        scale, type, material, price, releaseDate, dimensions, weight, features
    );

    // Display the new car and reset the form
    displayCar(newCar);
    document.getElementById("carForm").reset();
}
