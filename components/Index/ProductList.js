import { Card } from 'semantic-ui-react';

const ProductList = ({ products }) => {
  const mapProductsToItems = products => {
    return products.map(product => ({
      image: product.mediaUrl,
      header: product.name,
      meta: `$${product.price}`,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`,
    }));
  };

  return <Card.Group centered stackable itemsPerRow={3} items={mapProductsToItems(products)} />;
};

export default ProductList;
