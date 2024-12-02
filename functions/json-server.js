exports.handler = async (event, context) => {
    const routes = {
      "/products": [
        { id: 1, name: "Product A", price: 10 },
        { id: 2, name: "Product B", price: 20 },
      ],
      "/users": [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ],
    };
  
    const path = event.path.replace("/json-server", ""); // Extract the path
  
    if (routes[path]) {
      return {
        statusCode: 200,
        body: JSON.stringify(routes[path]),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Route not found" }),
      };
    }
  };
  