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
    res.status(500).json('Error ao buscar produto!');
  }
};

const GetProductsByCategorie = async (req, res) => {
  
  const categorie = req.params.category;
  const filterCategorie = { category: categorie }

  try {
    const productsByCategorie = await Product.findAll({ where: filterCategorie });
    res.status(200).json(productsByCategorie);
  } catch (error) {
    res.status(500).json('erro ao filtrar produtor por categoria!');
  }

};

export { GetProducts, FindProduct, GetProductsByCategorie };   
