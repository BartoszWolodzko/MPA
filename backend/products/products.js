export function getProducts(){
    return new Promise((resolve, reject) => {
        // Simulate a database query or API call to fetch the product by barcode
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Product 1', barcode: '001' },
                { id: 2, name: 'Product 2', barcode: '002' }
            ]);
        }, 1000); // Simulate a delay of 1 second
    });
}