let products = [];

//Nuevo producto
function addProduct(name, price, stockItems) {
    if (!name || name.trim() === '') {
        console.log("El nombre del producto no puede estar vacío");
        return false;
    }
    
    if (price <= 0) {
        console.log("El precio debe ser mayor a cero");
        return false;
    }
    
    if (stockItems < 0) {
        console.log("El stock no puede ser negativo");
        return false;
    }
    
    const existingProduct = products.find(product => product.name.toLowerCase() === name.toLowerCase());
    if (existingProduct) {
        console.log(`Ya existe un producto con el nombre "${name}"`);
        return false;
    }

    const product = {
        name: name,
        price: price,
        stockItems: stockItems
    };
    
    products.push(product);
    console.log(`Producto "${name}" agregado exitosamente`);
    return true;
}

//Mostrar todos los productos
function allProducts() {
    console.log("\n=== CATÁLOGO DE PRODUCTOS ===");
    
    if (products.length === 0) {
        console.log("No hay productos en el catálogo");
        return;
    }
    
    console.log("Total de productos:", products.length);
    console.log("----------------------------------------");
    
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name}`);
        console.log(`   Precio: $${product.price}`);
        console.log(`   Stock: ${product.stockItems} unidades`);
        console.log(`   Valor en inventario: $${(product.price * product.stockItems).toFixed(2)}`);
        console.log("----------------------------------------");
    });
}

//Calcular el total
function totalPrice() {
    if (products.length === 0) {
        console.log("No hay productos en el inventario");
        return 0;
    }
    
    const totalValue = products.reduce((total, product) => {
        return total + (product.price * product.stockItems);
    }, 0);
    
    console.log(`\nValor total del inventario: $${totalValue.toFixed(2)}`);
    return totalValue;
}

//Resultados
console.log("=== SISTEMA DE REGISTRO DE PRODUCTOS ===");

//Agregar productos
addProduct("Laptop Gamer", 1200, 5);
addProduct("Mouse Inalámbrico", 25, 50);
addProduct("Teclado Mecánico", 80, 15);

//Validaciones
addProduct("", 50, 10); // Nombre vacío
addProduct("Producto Error", -10, 5); // Precio negativo
addProduct("Laptop Gamer", 1300, 3); // Producto duplicado

//Mostrar productos
allProducts();

//Valor total
totalPrice();