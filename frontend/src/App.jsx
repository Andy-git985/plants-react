import { useEffect, useState } from 'react';
import itemServices from './services/item';

const App = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const response = await itemServices.getItems();
      console.log(response);
      setItems(response);
    };
    getItems();
  }, []);

  return (
    <div>
      {items.name} {items.quantity}
    </div>
  );
};

export default App;
