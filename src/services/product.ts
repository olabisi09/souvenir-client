class Product {
    async getProducts() {
        const res = await fetch("https://localhost:7170/allProducts")
        const json = await res.json();
        return json;
    }

    async getProductById(id: number) {
        const res = await fetch(`https://localhost:7170/productById/${id}`)
        const json = await res.json();
        return json;
    }
    
    async getProductByName(name: string) {
        const res = await fetch(`https://localhost:7170/productByName/${name}`)
        const json = await res.json();
        return json;
    }
}

export const product = new Product();