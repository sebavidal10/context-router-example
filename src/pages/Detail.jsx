import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/ContextProvider';

const Detail = () => {
  const { id } = useParams();
  const { getInsumo, formatNumber, addToCart } = useContext(Context);

  const currentInsumo = getInsumo(id);

  return (
    <div className="container border p-3 shadow rounded">
      <h1 className="text-uppercase">
        {currentInsumo?.name}
        <span className="float-end">
          ${formatNumber(currentInsumo?.price || 0)}.-
        </span>
      </h1>
      <div className="row">
        <div className="col-3">
          <img
            className="w-100 border rounded"
            src={currentInsumo?.imgUrl}
            alt="imagen del producto {currentInsumo?.name}"
          />
        </div>
        <div className="col-9">
          {currentInsumo?.desc}
          <div className="mt-3">
            {currentInsumo?.types.map((type) => (
              <span
                key={type}
                className="badge bg-secondary shadow mx-1 py-2 px-3 text-uppercase"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="text-end">
            <button
              className="btn btn-sm btn-danger shadow text-uppercase"
              onClick={() => addToCart(currentInsumo.id)}
            >
              agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
