const ValidatedProduct = {
    name: (name) => name && name.length > 3,
    price: (price) => price && price !== '0.00' && price !== '0,00',
    description: (description) => description && description.length > 10,
    image: (image) => image && image.length > 6,
    stock: (stock) => stock && stock > 0,
    sold: (sold) => sold && sold >= 0,
    category: (category) => category && category.length > 4,
}

export default ValidatedProduct;