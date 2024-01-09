import Product from '../models/product'

const GetProducts = async (req, res) => {

  const limited = req.query.limit ? req.query.limit : 1000;

  try {
    const products = await Product.findAll({ limit: limited });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json('Erro ao buscar os produtos');
  }
};

const FindProduct = async (req, res) => {

  const codeProduct = req.query.codProduct;
  const where = { cod: codeProduct };

  try {
    const product = await Product.findAll({ where: where });
    res.status(200).json(product);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json('Error ao buscar produto!');
  }
}

export { GetProducts, FindProduct };   
