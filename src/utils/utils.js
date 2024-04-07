const shortenText = (text)=>{
    return text.split(' ').slice(0,3).join('')
}

const searchProducts = (products,search)=>{
    if(!search) return products
    const searchedProducts = products.map(p=>p.title.includes(search))
    return searchedProducts
}



export {shortenText, searchProducts}