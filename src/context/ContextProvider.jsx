import { createContext, useEffect, useState } from 'react';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [insumos, setInsumos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantTotal, setCantTotal] = useState(0);

  const getInsumos = async () => {
    const res = await fetch('/context-router-example/insumos.json');
    const insumos = await res.json();
    setInsumos(insumos);
  };

  const getInsumo = (id) => {
    return insumos.find((insumo) => insumo.id === id);
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const calcTotal = () => {
    let total = 0;
    let cantTotal = 0;
    carrito.forEach((item) => {
      total += item.price * item.count;
      cantTotal += item.count;
    });
    setTotal(total);
    setCantTotal(cantTotal);
  };

  const addToCart = (insumoId) => {
    let tempInsumo = carrito.find((insumo) => insumo.id === insumoId);

    if (tempInsumo) {
      tempInsumo.count += 1;
      setCarrito([...carrito]);
    } else {
      tempInsumo = insumos.find((insumo) => insumo.id === insumoId);
      tempInsumo.count = 1;
      setCarrito([...carrito, tempInsumo]);
    }
  };

  const removeFromCart = (insumoId) => {
    let tempInsumo = carrito.find((insumo) => insumo.id === insumoId);

    if (tempInsumo.count === 1) {
      setCarrito(carrito.filter((insumo) => insumo.id !== insumoId));
    } else {
      tempInsumo.count -= 1;
      setCarrito([...carrito]);
    }
  };

  useEffect(() => {
    getInsumos();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [carrito]);

  return (
    <Context.Provider
      value={{
        insumos,
        total,
        cantTotal,
        formatNumber,
        getInsumo,
        carrito,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// export provider
export { ContextProvider };

// export context
export default Context;
