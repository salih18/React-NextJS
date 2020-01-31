import { useRouter } from 'next/router';
import { Container, Pagination } from 'semantic-ui-react';

const ProductPagination = ({ totalPages }) => {
  const router = useRouter();

  const handlePageChange = (event, data) => {
    data.activePage === 1 ? router.push('/') : router.push(`/?page=${data.activePage}`);
  };

  return (
    <Container textAlign="center" style={{ margin: '2em' }}>
      <Pagination defaultActivePage={1} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};

export default ProductPagination;
