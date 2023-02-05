import { NavLink } from 'react-router-dom';

import { Nav, ContainerList } from '../styles/header.js';

export function Header() {
  return (
    <header>
      <Nav>
        <ContainerList>
          <li>
            <NavLink
              className="bg-violet-500 text-violet-100 py-3 px-4 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring focus:border-violet-700"
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="bg-violet-500 text-violet-100 py-3 px-4 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring focus:border-violet-700"
              to="contact"
            >
              Contato
            </NavLink>
          </li>
        </ContainerList>
      </Nav>
    </header>
  );
}
