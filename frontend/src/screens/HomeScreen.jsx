import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import { useParams, Link } from 'react-router-dom'
import Paginate from '../components/Paginate'

import { useGetProductsQuery } from '../slices/productsApiSlice'
import Message from '../components/Message'
// one ? rest :
const HomeScreen = () => {
  const { pageNumber, keyword } = useParams()
  // calling data as we made the return an object with
  // products, page, pageSize
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber, keyword }) // add in params
  return (
    <>
      {keyword && (
        <Link to="/" className="btn btn-light mb-4">
          Go back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* we changed  the data to return an pbject */}
          {/* keyword comes in from the url */}
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
