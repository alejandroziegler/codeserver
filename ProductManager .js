class ProductManager{
    static #users = {}
    create(data){
        const user = {
            id : 
            ProductManager.#users.length === 0
                ? 1
                :  ProductManager.#users[ProductManager.#users.length -1].id +1,
            title: data.title,
            photo : data.photo,
            category: data.category,
            price : data.price,
            stock : data.stock
            
        };
        ProductManager.#users.push(user)
        console.log ("producto creado")
    }
    read (){
        return ProductManager.#users
    }
}

const gestorDeProductos = new ProductManager()
gestorDeProductos.create({
    title : "remera",
    photo : "remera.jpg",
            category: "remera",
            price : 150,
            stock : 300
})
gestorDeProductos.create({
    title : "buzo",
    photo : "buzo.jpg",
            category: "abrigos",
            price : 380,
            stock : 430
})
gestorDeProductos.create({
    title : "campera",
    photo : "campera.jpg",
            category: "abrigos",
            price : 680,
            stock : 580
})
gestorDeProductos.create({
    title : "gorra",
    photo : "gorra.jpg",
            category: "acbesorios",
            price : 470,
            stock : 230
})
gestorDeProductos.create({
    title : "camisas",
    photo : "camisas.jpg",
            category: "camisas",
            price : 750,
            stock : 270
})
console.log(gestorDeProductos.read()) 