import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you're looking for cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 76.88px);
  display: grid;
  place-items: center;
  background: hsl(186, 100%, 94%);
  text-align: center;
  text-transform: capitalize;

  h1 {
    font-size: 10rem;
  }
  h3 {
    color: hsl(209, 34%, 30%);
    margin-bottom: 1.5rem;
  }

  .btn {
    text-transform: uppercase;
    background: hsl(185, 62%, 45%);
    color: hsl(186, 100%, 94%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    font-weight: 400;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }
  .btn:hover {
    background: hsl(184, 80%, 74%);
    color: hsl(185, 91%, 17%);
  }
`;

export default Error;
