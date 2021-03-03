import React, {useState} from 'react';
import './contextualmenu.css';
import EditMovieModal from '../Modals/EditMovieModal/editmoviemodal';
import DeleteMovieModal from '../Modals/DeleteMovieModal/deletemoviemodal';

const ContextualMenu = ({ showMenu, xPos, yPos }) => {
  
  const [editShowModal, setEditShowModal] = useState(false);
  const [deleteShowModal, setDeleteShowModal] = useState(false);
  
  const handleEditClose = () => setEditShowModal(false);
  const handleEditShow = () => setEditShowModal(true);
  
  const handleDeleteClose = () => setDeleteShowModal(false);
  const handleDeleteShow = () => setDeleteShowModal(true);
  
  if (deleteShowModal) {
    return <DeleteMovieModal show={deleteShowModal} handleClose={handleDeleteClose} />;
  }
  if (editShowModal) {
    return <EditMovieModal show={editShowModal} handleClose={handleEditClose} />;
  }
  if (showMenu) {
    return (
      <>
        <div style={{top: yPos, left: xPos}} className="context-menu">
          <ul className="menu-options">
            <li className="menu-option" onClick={handleEditShow}>Edit</li>
            <li className="menu-option" onClick={handleDeleteShow}>Delete</li>
          </ul>
        </div>
      </>
    );
  }
  return null;
};

export default ContextualMenu;
