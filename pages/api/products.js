import connectDb from '../../utils/connectDb';
import Product from './../../models/Product';
connectDb();

export default async (req, res) => {
  const { page, size } = req.query;

  // convert query string value to numbers:
  const pageNum = Number(page);
  const pageSize = Number(size); // we set it 9

  const totalDocs = await Product.countDocuments();
  const totalPages = Math.ceil(totalDocs / pageSize);

  let products = [];
  // get number of product in page 1:
  if (pageNum === 1) {
    products = await Product.find()
      // .sort({ name: 'asc' })
      .limit(pageSize);
  } else {
    // get get the rest of pages
    const skips = pageSize * (pageNum - 1);
    products = await Product.find()
      .skip(skips)
      .limit(pageSize);
  }
  // const products = await Product.find();
  res.status(200).json({ products, totalPages });
};
