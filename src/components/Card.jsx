import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/ContextProvider';
const Card = ({ insumo }) => {
  const { formatNumber, addToCart } = useContext(Context);
  const Navigate = useNavigate();

  const goToDetail = (insumoId) => {
    Navigate(`/insumo/${insumoId}`);
  };

  return (
    <div className="col-3">
      <div className="card p-3 shadow">
        <img
          className="card-img-top"
          src={insumo.imgUrl}
          alt="Card image cap"
        ></img>
        <div key={insumo.id}>
          <p className="rounded text-center bg-danger text-white text-uppercase shadow mt-3 p-2">
            {insumo.name}
          </p>
          <p className="text-center">
            {insumo.types.map((type) => (
              <span
                key={type}
                className="badge bg-secondary shadow mx-1 py-2 px-3 text-uppercase"
              >
                {type}
              </span>
            ))}
          </p>
          <p className="text-end fs-3 text-secondary">
            $ {formatNumber(insumo.price)}.-
          </p>
          <div className="text-end">
            <button
              className="btn btn-sm btn-dark me-1 shadow text-uppercase"
              onClick={() => goToDetail(insumo.id)}
            >
              ver más
            </button>
            <button
              className="btn btn-sm btn-danger shadow text-uppercase"
              onClick={() => addToCart(insumo.id)}
            >
              agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
