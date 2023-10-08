import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import WorkIcon from '@mui/icons-material/Work';
import React, { useState, useEffect } from 'react';
import { setexperience, updateexperience } from '../Redux/actions/setexperience';
import { Box, Card, TextField, Typography, Button, Snackbar, Alert, Divider } from '@mui/material';

const mapStateToProps = (state) => {
  return {
    experience: state.experienceReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setexperience: (experience) => dispatch(setexperience(experience)),
    updateexperience: (experience) => dispatch(updateexperience(experience)),
  };
};

const WorkExperience = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [experience, setExperience] = useState([
    {
      jobTitle: '',
      organizationName: '',
      startYear: '',
      endYear: '',
    },
  ]);

  useEffect(() => {
    if (props.experience) {
      setExperience(Object.values(props.experience));
    }
  }, [props.experience]);

  useEffect(() => {
    experience.forEach((item, key) => {
      setValue(`experience[${key}].jobTitle`, item.jobTitle);
      setValue(`experience[${key}].organizationName`, item.organizationName);
      setValue(`experience[${key}].startYear`, item.startYear);
      setValue(`experience[${key}].endYear`, item.endYear);
    });
  }, [setValue, experience]);

  const addNewClick = () => {
    const tempForm = [...experience];
    const tempEntry = {
      jobTitle: '',
      organizationName: '',
      startYear: '',
      endYear: '',
    };
    tempForm.push(tempEntry);
    setExperience(tempForm);
  };

  const deleteCard = (key) => {
    const tempForm = [...experience];
    tempForm.splice(key, 1);
    setExperience(tempForm);
  };

  const handleChange = (event, title, key) => {
    const tempForm = [...experience];
    tempForm[key] = { ...tempForm[key], [title]: event.target.value };
    setExperience(tempForm);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    if (props.experience !== null) {
      props.updateexperience(data.experience);
    } else {
      props.setexperience(data.experience);
    }
    setOpen(true);
  });

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center mt-10">
        <Box>
          <Typography color="primary" className="mt-4 font-bold text-2xl text-center md:text-1xl" variant="h4">
             Work Experience Details:
          </Typography>

          <Divider>
            <WorkIcon color="primary" fontSize="large" />
          </Divider>

          {experience.map((item, key) => (
            <div key={key}>

              {/* Main content */}
              <Card style={{ borderRadius: '5px', border: '2px solid', padding: '2vw 5vw' }}>
                <Typography style={{ color: 'black', marginBottom: '3vw' }} variant="h6">
                  {`( Organization / Company ) ${key + 1}`}
                </Typography>

                {/* Input fields */}
                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto">
                  <TextField
                    id={`jobTitle-${key}`}
                    label="Job Title"
                    variant="outlined"
                    {...register(`experience[${key}].jobTitle`, { required: true })}
                    value={item.jobTitle}
                    error={errors?.experience && errors.experience[key]?.jobTitle}
                    helperText={errors?.experience && errors.experience[key]?.jobTitle && 'Job Title is required'}
                    onChange={(e) => handleChange(e, 'jobTitle', key)}
                  />

                  <TextField
                    id={`organizationName-${key}`}
                    label="Organization Name"
                    variant="outlined"
                    {...register(`experience[${key}].organizationName`, { required: true })}
                    value={item.organizationName}
                    error={errors?.experience && errors.experience[key]?.organizationName}
                    helperText={errors?.experience && errors.experience[key]?.organizationName && 'Organization Name is required'}
                    onChange={(e) => handleChange(e, 'organizationName', key)}
                  />
                </Box>

                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-8">
                  <TextField
                    id={`startYear-${key}`}
                    label="Start Year"
                    variant="outlined"
                    {...register(`experience[${key}].startYear`, { required: true })}
                    value={item.startYear}
                    error={errors?.experience && errors.experience[key]?.startYear}
                    helperText={errors?.experience && errors.experience[key]?.startYear && 'Start Year is required'}
                    onChange={(e) => handleChange(e, 'startYear', key)}
                  />

                  <TextField
                    id={`endYear-${key}`}
                    label="End Year"
                    variant="outlined"
                    {...register(`experience[${key}].endYear`, { required: true })}
                    value={item.endYear}
                    error={errors?.experience && errors.experience[key]?.endYear}
                    helperText={errors?.experience && errors.experience[key]?.endYear && 'End Year is required'}
                    onChange={(e) => handleChange(e, 'endYear', key)}
                  />
                </Box>
                {/* Add new Experience button */}
                {key === experience.length - 1 && (
                  <Typography onClick={() => addNewClick()} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Add New
                  </Typography>
                )}
                {/* Delete Experience button */}
                {experience.length !== 1 && (
                  <Typography onClick={() => deleteCard(key)} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Delete
                  </Typography>
                )}

                {/* Details Submit button */}
                {key === experience.length - 1 && (
                  <div style={{ marginTop: '2vh' }}>
                    <Button style={{ backgroundColor: 'green', color: '#fff', marginLeft: '40%', width: '20%' }} type="submit" onClick={onSubmit}>
                      {props.experience ? 'Update' : 'Submit'}
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </Box>
      </div>
      {/* Snackbar for success message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Personal Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
