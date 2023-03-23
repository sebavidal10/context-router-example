import { useContext } from 'react';
import Context from '../context/ContextProvider';

const Cart = () => {
  const { carrito, formatNumber, addToCart, removeFromCart } =
    useContext(Context);
  console.log(carrito);

  return (
    <div className="container">
      {carrito.map((insumo) => (
        <div className="row rounded shadow border my-3 p-2">
          <div className="col-6 text-uppercase">{insumo.name}</div>
          <div className="col-2 text-center">
            {insumo.count}
            <button
              className="btn btn-sm mx-2 btn-primary"
              onClick={() => addToCart(insumo.id)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(insumo.id)}
            >
              -
            </button>
          </div>
          <div className="col-4 text-end">
            ${formatNumber(insumo.price)} / $
            {formatNumber(insumo.count * insumo.price)}
          </div>
        </div>
      ))}
      <button className="float-end btn btn-success">Pagar!</button>
    </div>
  );
};

export default Cart;
