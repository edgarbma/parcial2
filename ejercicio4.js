let products = [];

//Agregar producto al carrito
function addProduct(name, price, quantity) {
    if (!name || name.trim() === '') {
        console.log("Error: El nombre del producto no puede estar vacío");
        return false;
    }
    
    if (price <= 0) {
        console.log("Error: El precio debe ser mayor a cero");
        return false;
    }
    
    if (quantity <= 0) {
        console.log("Error: La cantidad debe ser mayor a cero");
        return false;
    }
    
    //Verificar si el producto existe
    const existingProduct = products.find(product => product.name === name);
    
    if (existingProduct) {
        existingProduct.quantity += quantity;
        console.log(`Cantidad actualizada para ${name}: ${existingProduct.quantity}`);
    } else {
        const product = {
            name: name,
            price: price,
            quantity: quantity
        };
        
        products.push(product);
        console.log(`Producto ${name} agregado al carrito`);
    }
    
    return true;
}

//Eliminar productos
function removeProduct(name) {
    const initialLength = products.length;
    products = products.filter(product => product.name !== name);
    
    if (products.length < initialLength) {
        console.log(`Producto ${name} eliminado del carrito`);
        return true;
    } else {
        console.log(`Error: No se encontró el producto ${name} en el carrito`);
        return false;
    }
}

//Modificar la cantidad
function modifyProduct(name, newQuantity) {
    if (newQuantity <= 0) {
        console.log("Error: La cantidad debe ser mayor a cero");
        return false;
    }
    
    //Buscar el producto
    const product = products.find(product => product.name === name);
    
    if (product) {
        product.quantity = newQuantity;
        console.log(`Cantidad de ${name} actualizada a ${newQuantity}`);
        return true;
    } else {
        console.log(`Error: No se encontró el producto ${name} en el carrito`);
        return false;
    }
}

//Calcular totales
function calculateTotal() {
    //Subtotal
    const subtotal = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    
    //Descuento si es mayor a $100
    let discount = 0;
    if (subtotal >= 100) {
        discount = subtotal * 0.10;
        console.log(`¡Descuento aplicado! (10% por compra mayor a $100)`);
    }
    
    //Total
    const total = subtotal - discount;
    
    return {
        subtotal: subtotal,
        discount: discount,
        total: total
    };
}

//Mostrar resumen
function showSummary() {
    console.log("\n=== RESUMEN DE COMPRA ===");
    
    if (products.length === 0) {
        console.log("El carrito está vacío");
        return;
    }
    
    //Productos
    console.log("Productos en el carrito:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price} x ${product.quantity} = $${(product.price * product.quantity).toFixed(2)}`);
    });
    
    //Totales
    const totals = calculateTotal();
    
    console.log("\n--- TOTALES ---");
    console.log(`Subtotal: $${totals.subtotal.toFixed(2)}`);
    console.log(`Descuento: $${totals.discount.toFixed(2)}`);
    console.log(`Total: $${totals.total.toFixed(2)}`);
    
    return totals;
}

//Resultados
console.log("=== SISTEMA DE CARRITO DE COMPRAS ===");

//Agregar productos
addProduct("Laptop", 800, 1);
addProduct("Mouse", 25, 2);
addProduct("Teclado", 75, 1);

//Validaciones
addProduct("", 50, 1); // Nombre vacío
addProduct("Producto Error", -10, 1);
addProduct("Producto Error 2", 50, 0); 

//Modificar cantidad
modifyProduct("Mouse", 3);

//Mostrar resumen
showSummary();

//Eliminar producto
removeProduct("Teclado");

//Mostrar resumen
showSummary();

//Descuento con valores 
console.log("\n--- AGREGANDO MÁS PRODUCTOS PARA PROBAR DESCUENTO ---");
addProduct("Monitor", 150, 1);
addProduct("Auriculares", 80, 1);

//Resumen final
showSummary();

//Modificación con cantidad inválida
modifyProduct("Monitor", -5);

//liminar producto que no existe
removeProduct("Tablet");