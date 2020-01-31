import connectDb from '../../utils/connectDb';
import Product from './../../models/Product';

connectDb();

const handleGetRequest = async (req, res) => {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
};


const handleDeleteRequest = (req, res) => {
  const { _id } = req.query;

  try {
    // 1) Delete product by id 
    await Product.findOneAndDelete({ _id });

    // 2) Remove from all carts, referenced as "product"
    await Cart.updateMany(
      { "products.product": _id },
      { $pull: { products: { product: _id } } }
    )
    res.status(204).json({});

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product") 
  }
}


const handlePostRequest = async (req, res) => {
  try {
    const { name, price, description, mediaUrl } = req.body;
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send('Product missing one or more fields');
    }
    const product = await new Product({
      name,
      price,
      description,
      mediaUrl,
    }).save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send('Server error in creation product');
    console.error(error);
  }
};

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'DELETE':
      await handleDeleteRequest(req, res);
      break;
    case 'POST':
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
};
