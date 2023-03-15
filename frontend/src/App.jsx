import { useEffect, useState } from 'react';
import Register from './pages/Register';
import itemServices from './services/item';

const App = () => {
  const [items, setItems] = useState();

  // useEffect(() => {
  //   const getItems = async () => {
  //     const response = await itemServices.getItems();
  //     setItems(response);
  //   };
  //   getItems();
  // }, []);

  return (
    // <div>
    //   {items &&
    //     items.map((i) => (
    //       <div>
    //         {i.name}
    //         {i.quantity}
    //       </div>
    //     ))}
    // </div>
    <Register />
  );
};

export default App;
