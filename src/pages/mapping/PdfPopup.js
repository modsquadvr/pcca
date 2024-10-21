// src/components/PdfPopup.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const PdfPopup = ({ open, handleClose, pdfUrl }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: '80%', height: '100%', margin: 'auto', backgroundColor: 'white', padding: 2 }}>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
      </Box>
    </Modal>
  );
};

export default PdfPopup;