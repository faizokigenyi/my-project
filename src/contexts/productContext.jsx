import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true before fetching data
        setLoading(true);
        const response = await fetch(
          "https://mocki.io/v1/8c0cd5cf-6067-4ddb-b11d-403de94ca515"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log("result", result);
        setData(result.products); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  return (
    <ProductContext.Provider value={{ data, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
