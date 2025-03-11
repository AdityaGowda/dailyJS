import { useEffect, useMemo, useState } from "react";

// Define the number of items to display per page
const itemPerPage = 5;

export default function Pagination() {
  const [product, setProduct] = useState([]);
  const [productTotalLimit, setProductTotalLimit] = useState(0);
  const [page, setPage] = useState(0);

  // Function to fetch product data from an external API
  async function fetchProduct() {
    let responseData = await fetch(`https://dummyjson.com/products`);
    let productData = await responseData.json();
    if (productData) {
      setProduct(productData.products);
      setProductTotalLimit(productData.limit);
    }
  }

  // Function to handle changing the page when a pagination button is clicked
  function handleProductPage(pageNumber) {
    setPage(pageNumber);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  // Memoized pagination buttons to avoid unnecessary recalculations
  const pagination = useMemo(() => {
    // Create an array of page numbers based on the total number of products
    return [...Array(Math.ceil(productTotalLimit / itemPerPage))].map(
      (_, i) => {
        return (
          <span
            key={i}
            className={`button-2 ${page === i ? "colorWhite bgBlue" : ""}`} // Highlight the current page
            onClick={() => handleProductPage(i)} // Update the page when clicked
          >
            {i + 1} {/* Display the page number (starting from 1) */}
          </span>
        );
      }
    );
  }, [page, productTotalLimit]); // Recalculate when `page` or `productTotalLimit` changes

  return (
    <div className="p-20">
      <h1 className="text-center mb-20">Pagination</h1>

      {/* Pagination container */}
      <div className="flex align-center wrap justify-center gap-20 m-30">
        {/* Previous button */}
        <span
          className={`button-2 bgBlack colorWhite ${
            page > 0 ? "visible" : "visibleNone"
          }`}
          onClick={() => handleProductPage(page - 1)} // Go to the previous page
        >
          &lt; {/* Display the left arrow for previous page */}
        </span>

        {/* Render the pagination buttons dynamically */}
        {pagination}

        {/* Next button */}
        <span
          className={`button-2 bgBlack colorWhite ${
            page + 1 < productTotalLimit / itemPerPage
              ? "visible" // Make the next button visible only if there are more pages
              : "visibleNone" // Hide the next button if we're on the last page
          }`}
          onClick={() => handleProductPage(page + 1)} // Go to the next page
        >
          &gt; {/* Display the right arrow for next page */}
        </span>
      </div>

      {/* Product display section */}
      <div className="flex wrap justify-center">
        {/* Slice the products array to only display the products for the current page */}
        {product
          .slice(page * itemPerPage, page * itemPerPage + itemPerPage)
          .map((v, i) => {
            return (
              <div className="card p-20 m-10 bgWhite" key={i}>
                <p className="font-lg">{v.title}</p>{" "}
                {/* Display product title */}
                <p>{v.description}</p> {/* Display product description */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
