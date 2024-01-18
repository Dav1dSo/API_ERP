import Product from '../models/product'
import ImagesProducts from '../models/ImagesProducts'
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
  const where = { codProduct: codeProduct };
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
      codProduct, name, price, description, stock, sold, category
    } = req.body;

    const files = req.files;
    const fileUrls = files.map((file) => `/images/products/${file.filename}`);

    const DataValidated = {
      codProduct: codProduct,
      name: !Validated.name(name) ? res.status(400).json('Nome do produto inválido!') : name,
      price: !Validated.price(price) ? res.status(400).json('Preço inválido!') : parseFloat(price.replace(',', '.')).toFixed(2),
      description: !Validated.description(description) ? res.status(400).json('Descrição nula ou muito curta!') : description,
      stock: !Validated.stock(stock) ? res.status(400).json('Estoque não pode ser nulo!') : stock,
      sold: !Validated.sold(sold) ? res.status(400).json('Quantidade vendida inválida!') : sold,
      category: !Validated.category(category) ? res.status(400).json('Categoria inválida') : category
    }

    const product = await Product.create(DataValidated);

    const images = await Promise.all(
      fileUrls.map(async (fileUrl) => {
        return await ImagesProducts.create({ codProduct, path: fileUrl });
      })
    );
    return res.status(200).json({ message: 'Produto criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return res.status(500).json({ message: 'Erro ao criar produto' });
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
    res.status(500).json('Error ao filtrar produtos pelos valores informados.');
  }
};

const UpdatedProduct = async (req, res) => {
  const { codProduct, name, price, description, stock, sold, category } = req.body;

  try {
    const product = await Product.findByPk(codProduct);

    if (!product) res.status(401).json('Produto não encontrado!');

    product.name = !Validated.name(name) ? res.status(400).json('Nome do produto inválido!') : name,
      product.price = !Validated.price(price) ? res.status(400).json('Preço inválido!') : parseFloat(price.replace(',', '.')).toFixed(2),
      product.description = !Validated.description(description) ? res.status(400).json('Descrição nula ou muito curta!') : description;
    product.stock = !Validated.stock(stock) ? res.status(400).json('Estoque não pode ser nulo!') : stock;
    product.sold = !Validated.sold(sold) ? res.status(400).json('Quantidade vendida inválida!') : sold;
    product.category = !Validated.category(category) ? res.status(400).json('Categoria inválida') : category;

    await product.save();
    const images = await Promise.all(
      fileUrls.map(async (fileUrl) => {
        return await ImagesProducts.create({ codProduct, path: fileUrl });
      })
    );
    return res.status(200).json('Produto atualizado com sucesso!');
  } catch (error) {
    res.status(500).json("Não foi possível atualizar produto!" + error);
  }
};

const UpdatedImageProduct = async (req, res) => {
  const { id, codProduct } = req.body;
  const files = req.files;

  try {
    const fileUrls = files.map((file) => `/images/products/${file.filename}`);
    const updatedImages = await Promise.all(
      fileUrls.map(async (fileUrl) => {
        const imageProduct = await ImagesProducts.findOne({
          where: { id, codProduct }
        });
        if (!imageProduct) {
          return res.status(404).json({ message: "Imagem do produto não encontrada!" });
        }
        imageProduct.path = fileUrl;
        await imageProduct.save();

        return imageProduct; 
      })
    );
    return res.status(200).json({ message: "Imagem do produto atualizada com sucesso!" });
  } catch (error) {
    return res.status(400).json({ message: "Não foi possível atualizar imagem do produto."});
  }
}; 



export { GetProducts, FindProduct, GetProductsByCategorie, CreateProduct, GetProductsByValue, UpdatedProduct, UpdatedImageProduct };
