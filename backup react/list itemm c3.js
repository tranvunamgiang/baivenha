// import logo from './logo.svg';
import './App.css';
import Rating from './Rating';
   function Header(){
    <h1>Our Product</h1>
   }
  function User({ name,pic,price}){
    return (
      
    
      <section>
        
        <img className="user-profile-pic" src={pic} alt={name} />
        <h2 className="user-name">
           <span className="user-first-name">{name}</span>
          </h2>
          <h3 className="user-price"></h3>
          <span className="user-pricetag">{price}</span>
          <button>Add to Cart</button>
          <Rating />
          
          
          
      </section>
      
    );
  }
    
  function App() {
    const user = [
      {
        name: "Product 1",
        pic: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024&dpr=2",
        price: "$19.99",
      },
      {
        name: "Product 2",
        pic: "https://cdn.thewirecutter.com/wp-content/media/2024/05/windowsultrabooks-2048px-2585-1.jpg",
        price: "$29.00",
        
      },
      {
        name: "Product 3",
        pic: "https://cdn.thewirecutter.com/wp-content/media/2023/06/ultrabooks-2048px-0883.jpg",
        price :"$39.99",
      },
      {
        name: "Product 4",
        pic: "https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&width=1024&dpr=2",
        price: "$14.99",
      },
      
      
      
    ];
    return (
      <div className="App">
        {user.map((usr) => (
          <User name={usr.name} pic={usr.pic} price={usr.price} />
        ))}
      </div>
      
    );
        };

    
  
  export default App;
  


