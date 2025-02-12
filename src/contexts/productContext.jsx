import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


// read the products data




export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  fetch('db.json') // Path to your JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        // `data` is the parsed JSON object (or array)
        console.log(data);
        setData(data.products); // Update state with fetched data
    })
    .catch(error => {
        console.error('Error fetching or parsing the JSON file:', error);
    });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Set loading state to true before fetching data
  //       setLoading(true);
  //       const response = await fetch(
  //         "https://mocki.io/v1/8c0cd5cf-6067-4ddb-b11d-403de94ca515"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const result = await response.json();
  //       console.log("result", result);
  //       setData(result.products); // Update state with fetched data
  //     } catch (err) {
  //       setError(err.message); // Handle errors
  //     } finally {
  //       setLoading(false); // Set loading to false after fetching
  //     }
  //   };

  //   fetchData(); // Call the fetch function when the component mounts
  // }, []);

  return (
    <ProductContext.Provider value={{ data, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
