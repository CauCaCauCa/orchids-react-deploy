
// const domain = 'http://localhost:8000';
const domain = 'https://orchids-express-deploy.vercel.app';


export async function fetchAPI(caller) {
    return fetch(domain + caller.uri, {
        method: caller.method,
        headers: caller.Headers,
        body: caller.body
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log('Error: ', error);
        });  
}
