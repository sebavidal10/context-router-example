import { useContext } from 'react';
import Context from '../context/ContextProvider';
import Card from '../components/Card';

const Home = () => {
  const { insumos } = useContext(Context);

  return (
      <div className="container">
        <div className="row">
          {insumos.map((insumo) => (
            <Card key={insumo.id} insumo={insumo} />
          ))}
        </div>
      </div>
  );
};

export default Home;
