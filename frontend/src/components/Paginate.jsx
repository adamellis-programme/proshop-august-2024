import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    // if only one page do not show
    // map through the pages - have an array, pass in pages starts at 0
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            // + 1 = 0 based so start at 1
            // link depending on if admin or not
            to={!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            {/* page pag item
                if x + 1 === page this will
                be our acitve link
                */}
            {/* The active={x + 1 === page} prop ensures that the current page number (stored in the page variable) is highlighted or styled differently to indicate that it is the active page. */}
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
