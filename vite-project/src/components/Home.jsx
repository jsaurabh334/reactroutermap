

const Home = () => {
  const products = [
    { name: 'saurabh', id: 2,years:23 },
    { name: 'vinit', id: 1 ,years:20},
    { name: 'harsh', id: 3 ,years:19},
  ];
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.name} is {product.years } yrs old
    </li>
  );
  
  
  return (
    <ul>{listItems}</ul>
  );
}

export default Home