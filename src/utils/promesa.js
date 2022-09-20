let is_ok = true;

let Products = (4);

let customFetch = (Products) => {
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