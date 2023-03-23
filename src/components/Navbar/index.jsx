import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../context/ContextProvider';

import 'bootstrap-icons/font/bootstrap-icons.css';

import Logo from './logo.png';

const Navbar = () => {
  const { total, formatNumber, cantTotal } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black mb-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} alt="maquina de tatuar de colores" /> Insumos Tattoo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-link">
                <span
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Home
                </span>
              </NavLink>
              <NavLink to="/carro" className="nav-link">
                <span
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  <span className="me-2">{cantTotal}</span>
                  <i className="bi bi-cart me-2"></i>${formatNumber(total)}
                  <span className="ms-2">Carro</span>
                </span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
