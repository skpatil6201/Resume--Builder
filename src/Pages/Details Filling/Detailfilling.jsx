import './sidebar.css';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import Education from '../../Components/Education';
import Keyskills from '../../Components/Keyskills';
import Header from '../../Components/Header/Header';
import SchoolIcon from '@mui/icons-material/School';
import { Button, Snackbar, Alert } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkExperience from '../../Components/WorkExperience';
import PersonalInformation from '../../Components/PersonalInformation';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
    education: state.educationReducer,
    experience: state.experienceReducer,
    Keyskills: state.keyskillsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

function Detailfilling(props) {
  const navigate = useNavigate();

  const [activeComponent, setActiveComponent] = useState('personal');

  const [open, setOpen] = useState(false);

  const handleSidebarClick = (componentName) => {
    let shouldNavigate = true;

    switch (activeComponent) {
      case 'personal':
        if (componentName === 'education' && props.contact === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'education':
        if (componentName === 'work' && props.education === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'work':
        if (componentName === 'keyskill' && props.experience === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'keyskill':
        if (componentName === 'preview' && props.Keyskills === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      default:
        break;
    }

    if (shouldNavigate) {
      if (
        (activeComponent === 'personal' && componentName === 'education') ||
        (activeComponent === 'education' && componentName === 'work') ||
        (activeComponent === 'work' && componentName === 'keyskill')
      ) {
        setActiveComponent(componentName);
      } else if (
        (activeComponent === 'education' && componentName === 'personal') ||
        (activeComponent === 'work' && componentName === 'education') ||
        (activeComponent === 'keyskill' && componentName === 'work')
      ) {
        setActiveComponent(componentName);
      }
    }
  };

  const handleNext = () => {
    switch (activeComponent) {
      case 'personal':
        if (props.contact !== null) {
          setActiveComponent('education');
        } else {
          setOpen(true);
        }
        break;
      case 'education':
        if (props.education !== null) {
          setActiveComponent('work');
        } else {
          setOpen(true);
        }
        break;
      case 'work':
        if (props.experience !== null) {
          setActiveComponent('keyskill');
        } else {
          setOpen(true);
        }
        break;
      case 'keyskill':
        if (props.Keyskills !== null) {
          navigate('/preview');
        } else {
          setOpen(true);
        }
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (activeComponent) {
      case 'personal':
        navigate('/Templete');
        break;
      case 'education':
        setActiveComponent('personal');
        break;
      case 'work':
        setActiveComponent('education');
        break;
      case 'keyskill':
        setActiveComponent('work');
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Header component for Navigation */}
      <Header />

      {/* Main content */}
      <div className="flex flex-wrap p-3 w-full">
        <div style={{ marginLeft: '7vw', width: '30vh' }}>

          {/* Sidebar for page Navigation */}
          <sidebar className="side">
            <ul style={{ marginTop: '5vw' }}>
              <li
                className={`cursor-pointer border-black ${activeComponent === 'personal' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }`}
                onClick={() => handleSidebarClick('personal')}
              >
                <AccountBoxIcon /> Personal Info
              </li>
              <li
                className={`cursor-pointer ${activeComponent === 'education' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }`}
                onClick={() => handleSidebarClick('education')}
              >
                <SchoolIcon /> Education
              </li>
              <li
                className={`cursor-pointer ${activeComponent === 'work' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }`}
                onClick={() => handleSidebarClick('work')}
              >
                <WorkIcon /> Work Experience
              </li>
              <li
                className={`cursor-pointer ${activeComponent === 'keyskill' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }`}
                onClick={() => handleSidebarClick('keyskill')}
              >
                <BuildIcon /> Key Skill
              </li>
            </ul>
          </sidebar>
        </div>
        <div>
          {/* Render component based on activeComponent */}
          {activeComponent === 'personal' && <PersonalInformation />}
          {activeComponent === 'education' && <Education />}
          {activeComponent === 'work' && <WorkExperience />}
          {activeComponent === 'keyskill' && <Keyskills />}
        </div>
        <div className="w-full flex flex-wrap justify-center mt-8 mb-8">
          <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center">

            {/* Back Button */}
            <Button
              style={{ backgroundColor: 'blue', color: '#fff', width: '10vw', marginLeft: '13vw' }}
              onClick={handleBack}
            >
              Back
            </Button>

            {/* Next Button */}
            <Button
              style={{ backgroundColor: 'blue', color: '#fff', width: '10vw', marginLeft: '20vw' }}
              onClick={handleNext}
            >
              {activeComponent === 'keyskill' ? (
                <>
                  Preview <KeyboardDoubleArrowRightSharpIcon />
                </>
              ) : (
                'Next'
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Snackbar for success message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please Submit The Details!
        </Alert>
      </Snackbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailfilling);