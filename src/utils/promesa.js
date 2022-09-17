let is_ok = true;

let producto = 5;

let customFetch = (producto) => {
    return
}

let desafio = (task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, 2000);
        } else {
            reject("Error")
        }
    });
} 

export default desafio;