import React, { useState } from 'react';
import EditModal from './EditModal';
import Main from './Main';

const ModalPage = () =>{

    return (
        <>
        <div className="modal-background">
            <Main />
        </div>
        <EditModal/>
        </>
    );
}

export default ModalPage;