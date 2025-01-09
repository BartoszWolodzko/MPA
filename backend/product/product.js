export async function getProductByBarcode(barcode){
    return new Promise((resolve, reject) => {
        // Simulate a database query or API call to fetch the product by barcode
        setTimeout(() => {
            const product = { id: 123, name: 'Example Product', barcode: barcode };
            resolve(product);
        }, 1000); // Simulate a delay of 1 second
    });
}