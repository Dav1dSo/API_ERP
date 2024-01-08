import Product from '../models/product'

const getProducts = async (req, res) => {
  
  let options = {
    limit: req.query.limit ? req.query.limit : 1000,
  };

  try {
    const products = await Product.findAll(options);
    res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json('Erro ao buscar os produtos');
  }
};

export default getProducts;
