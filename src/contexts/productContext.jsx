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
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log("result", result);
        setData(result); // Update state with fetched data
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
