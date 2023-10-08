import { connect } from 'react-redux';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { settemplate, updatetemplate } from '../../Redux/actions/settemplate';

const mapStateToProps = (state) => {
  return {
    resumedataprops: state.templateReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template)),
  };
};

const TempleteCard = ({ data, thumbnail, settemplate, updatetemplate, resumedataprops }) => {
  const navigate = useNavigate();
  const template = { data, thumbnail };
  const Templetedata = resumedataprops;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const onSubmit = () => {
    if (Templetedata !== null) {
      updatetemplate(template);
    } else {
      settemplate(template);
    }
    navigate('/Detailfilling');
  };

  return (
    <>
      {/*main Content*/}
      <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
        <div>
          {/*Show Templates Dummy Images*/}
          <img
            style={{
              width: '100%',
              height: '45vh',
              border: '3px solid black',
              opacity: isHovered ? 0.7 : 1
            }}
            src={template.thumbnail}
            alt="Template Thumbnail"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          />

          {/*Show the button only when hovered*/}
          {isHovered && (
            //Resume select Button
            <Button 
              color="primary"
              variant="outlined"
              style={{
                top: '50%',
                left: '50%',
                position: 'absolute',
                alignItems: 'center',
                transform: 'translate(-50%, -50%)',
              }}
              onClick={onSubmit}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
              className="font-bold py-2 px-4 rounded"
            >
              <AdsClickIcon color="inherit" fontSize='large' /> Select
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TempleteCard);
