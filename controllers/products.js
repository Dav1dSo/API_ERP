import Product from '../models/product'

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);  
        res.status(500).json('Erro ao buscar os produtos');
      }
};

export default getProducts;
