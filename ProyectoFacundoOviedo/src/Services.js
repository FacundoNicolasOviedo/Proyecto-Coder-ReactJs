const products = [
    { id: "1", name: "Aero Pro Drive", price: 35000, category: "Babolat",},
    { id: "2", name: "Extreme MP", price: 26300, category: "Head" },
    { id: "3", name: "Pro Staff v13", price: 25000, category: "Wilson" },
    { id: "4", name: "Speed 2022", price: 30000, category: "Head" },
    { id: "5", name: "Graphene", price: 28000, category: "Head" },
    { id: "6", name: "Pure Drive", price: 20500, category: "Babolat" },
    { id: "7", name: "RDS 001 mid plus", price: 21000, category: "Babolat" },
    { id: "8", name: "Cobra", price: 36000, category: "Wilson" },
  ];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id)

            if (product) {
                resolve(product)
            } else {
                reject("no existe el producto")
            }
        }, 1000);
    })
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = category
            ? products.filter((product) => product.category === category)
            : products;
    
          resolve(productosFiltrados);
        }, 1000);
    })
}
 