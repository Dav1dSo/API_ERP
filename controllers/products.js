import Product from '../models/product'
import Validated from '../functions/RequestValidate/ValidatedProduct';

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
    res.status(500).json('Erro ao filtrar produtor por categoria!');
  }
};

const CreateProduct = async (req, res) => {
  try {
    const {
      cod, name, price, description, image, stock, sold, category
    } = req.body;

    const DataValidated = { 
      cod: cod,
      name: !Validated.name(name) ? res.status(400).json('Nome do produto inválido!') : name,
      price: !Validated.price(price) ? res.status(400).json('Preço inválido!') : price,
      description: !Validated.description(description) ? res.status(400).json('Descrição nula ou muito curta!') : description,
      image: !Validated.image(image) ? res.status(400).json("Imagem inválida") : image,
      stock: !Validated.stock(stock) ? res.status(400).json('Estoque não pode ser nulo!') : stock,
      sold: !Validated.sold(sold) ? res.status(400).json('Quantidade vendida inválida!') : sold,
      category: !Validated.category(category) ? res.status(400).json('Categoria inválida') : category
    }

    await Product.create( DataValidated );   
    res.status(201).json('Produto adicionado com sucesso!')
  } catch (error) {
    res.status(500).json('Error ao criar produto.' + error)
  }
};

const GetProductsByValue = async (req, res) => {

  try {
    const valueInitial = req.query.initialValue;
    const valueFinal = req.query.finalValue;

    const products = await Product.findAll();

    const productsFilter = products.filter(obj => obj.price >= valueInitial && obj.price <= valueFinal);
    res.status(200).json(productsFilter);
 
  } catch (error) {
    res.status(500).json('Error ao filtrar produtos pelos valores informados.')
  }
};

const UpdatedProduct = async (req, res) => {
  const { cod, name, price, description, image, stock, sold, category } = req.body;

  try {
    const product = await Product.findByPk(cod); 
   
    if(!product) res.status(401).json('Produto não encontrado!');

    product.name = !Validated.name(name) ? res.status(400).json('Nome do produto inválido!') : name;
    product.price = !Validated.price(price) ? res.status(400).json('Preço inválido!') : price; 
    product.description = !Validated.description(description) ? res.status(400).json('Descrição nula ou muito curta!') : description;
    product.image = !Validated.image(image) ? res.status(400).json("Imagem inválida") : image;
    product.stock = !Validated.stock(stock) ? res.status(400).json('Estoque não pode ser nulo!') : stock;
    product.sold = !Validated.sold(sold) ? res.status(400).json('Quantidade vendida inválida!') : sold;
    product.category = !Validated.category(category) ? res.status(400).json('Categoria inválida') : category;
   
    await product.save();
     
    res.status(200).json('Produto atualizado com sucesso!');
  } catch (error) {  
    res.status(500).json("Não foi possível atualiar produto!" + error);
  }
};

export { GetProducts, FindProduct, GetProductsByCategorie, CreateProduct, GetProductsByValue, UpdatedProduct };
 