import './App.css';
import { useEffect, useState } from 'react';


function App() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [])

  const selectPageHandler =(selectedPage)=>{
    if(selectedPage >=1 && selectedPage <=products.length/10 && selectedPage !==page){
         setPage(selectedPage);
    }
  }
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100'); // Await the fetch response
      const result = await response.json(); // Parse the JSON after the response resolves
      setProducts(result.products);
    } catch (error) {
      console.error('Error fetching data:', error); // Handle any errors
    }
  };

  return (
    <div>
      {
        products.length > 0 && <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className='products__single '>
                <span>{product.title}</span>
                <img src={product.thumbnail} alt={product.title}></img>
              </span>
            )
          })
          }
        </div>
      }
      {
        products.length > 0 && <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀️</span>
          {
            [...Array(products.length / 10)].map((_, i) => {
              return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
            })
          }
          <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶️</span>
        </div>
      }
    </div>
  );
}

export default App;
