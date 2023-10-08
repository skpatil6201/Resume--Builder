import React from 'react';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header/Header';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const mapStateToProps = (state) => {
  return {
    savedfile: state.resumeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

function Myresume(props) {
  const savedresume = props.savedfile;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const downloadResume = async () => {
    const input = document.getElementById('download');

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');

      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();

      pdf.addImage(canvas
        .toDataURL('image/png'), 'JPEG', 0, 0, width, height
      );

      pdf.save(`AlmabetterResume.pdf`);
    }).catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
      {/*Header Component for navigation */}
      <Header />

      {/* Main content */}
      <Box 
        color="primary"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        className='flex py-8 px-8 justify-center items-center relative'
      >
        <div
          id='download'
        >
          {savedresume !== null ? (
            <div style={{ opacity: isHovered ? 0.7 : 1 }}>{savedresume.data}</div>
          ) : (
            <>
              <ErrorOutlineIcon color="primary" sx={{fontSize:'25rem'}} />
              <Typography 
                variant="h3"
                gutterBottom
                color="primary" 
                className='text-center'
              >
                No Resume !
              </Typography>
            </>
          )}
        </div>
        {props.savedfile ? (
          <button
            color='primary'
            variant='contained'
            onClick={downloadResume}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
            }}
            className='bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded'
          >
            <CloudDownloadIcon /> Download
          </button>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Myresume);
