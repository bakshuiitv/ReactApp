import React, { useEffect, useState } from 'react';
import CustomLoader from './CustomLoader'



const Services = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const APIONE = 'https://fakestoreapi.com/products';

  useEffect(() => {
    setIsLoading(true);
    fetch(APIONE)
      .then((res) => res.json())
     // .then((data) => setProducts(data))
      .then((data) => {
        const topTen = data.slice(0, 6); // ✅ only 10 products
        setProducts(topTen);

    })
      .catch((err) => console.error('Error fetching data:', err))
      .finally(() => setIsLoading(false));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const decrement = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (

    <div style={{ margin: '155px 0 0 0',}}>
        <CustomLoader isLoading={isLoading} />
    <div className="container">
        
       
     
      <div className="row">
      
        {products.map((product) => (
            
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-30">
            <div
              className="course-item"
              style={{
                border: '1px solid #ddd',
                padding: '16px',
                borderRadius: '10px',
              }}
            >
              <div className="image">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="content">
                <h4 className="title" title={product.title}>
  {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}
            </h4>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.rating.rate}</p>
                <p>{product.rating.count}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: 'teal',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
      
        ))}
      </div>

      <div className="mt-4" style={{ marginTop: '40px' }}>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: '50px' }}>
                {item.title} - ${item.price} × {item.quantity} = ${(
                  item.price * item.quantity
                ).toFixed(2)}
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                  <button
                    onClick={() => decrement(item.id)}
                    style={{
                      padding: '5px 10px',
                      marginRight: '5px',
                      backgroundColor: 'crimson',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => increment(item.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: 'green',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${getTotal()}</h4>

     hello i am here ${getTotal()}

      </div>
    </div> </div>
  );
};

export default Services;
