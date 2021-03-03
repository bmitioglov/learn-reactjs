import React, { useState } from 'react';
import './header.css';
import AddMovieModal from '../Modals/AddMovieModal/addmoviemodal';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <p>
          <b>netflix</b>
          roulette
        </p>
        <button className="add-movie-button" type="button" onClick={handleShow}>+ Add Movie</button>
      </div>
      <AddMovieModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
