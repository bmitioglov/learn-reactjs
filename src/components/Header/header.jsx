import React, { useState } from 'react';
import './header.css';
import Addmoviemodal from '../Modals/AddMovieModal/addmoviemodal';

const Header = () => {
  const [show, setShow] = useState(false);
  
  const toggleAddModal = () => setShow((prevState) => !prevState);

  return (
    <>
      <div className="header">
        <p>
          <b>netflix</b>
          roulette
        </p>
        <button className="add-movie-button" type="button" onClick={toggleAddModal}>+ Add Movie</button>
      </div>
      <Addmoviemodal show={show} onClose={toggleAddModal} />
    </>
  );
};

export default Header;
