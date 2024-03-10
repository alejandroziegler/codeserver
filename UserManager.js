class UserManager{
    static #users = {}
    create(data){
        const user = {
            id : 
                UserManager.#users.length === 0
                ? 1
                :  UserManager.#users[UserManager.#users.length -1].id +1,
            foto : data.foto,
            email : data.foto,
            password : data.pasbord,
            role : 0 
        };
        UserManager.#users.push(user)
        console.log ("usuario cread")
    }
    read (){
        return UserManager.#users
    }
}

const gestorDeUauarios = new UserManager()
gestorDeUauarios.create({
    foto : "ale .jpg",
    email : "alejandroziegler18@gmail.com",
    password : "hola12"
})//crear otro usuario
gestorDeUauarios.read()