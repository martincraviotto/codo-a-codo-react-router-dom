import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <div>Home</div>
        <Link to="contactos">  Haz click para ir a contactos </Link>
    </>
  )
}
