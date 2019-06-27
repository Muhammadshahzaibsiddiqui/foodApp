
  function countries() {
    return new Promise((resolve, reject) => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => {
            resolve(res);
        }).catch(e => {
            reject({message: "Something Went Wrong..."})
        }) 
    }) 
    
} 


export {
    countries
}