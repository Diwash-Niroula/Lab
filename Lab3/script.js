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
