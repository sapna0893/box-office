import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Navs.styled';

function Navs() {
  const location = useLocation();
  console.log('Location', location);
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default Navs;
