import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';
import React, { useState, useEffect } from 'react';
import { setkeyskills, updatekeyskills } from '../Redux/actions/setkeyskills';
import { Box, Card, TextField, Typography, Button, Snackbar, Alert, Divider } from '@mui/material';

const mapStateToProps = (state) => {
  return {
    skills: state.keyskillsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setkeyskills: (skills) => dispatch(setkeyskills(skills)),
    updatekeyskills: (skills) => dispatch(updatekeyskills(skills)),
  };
};

function Keyskills(props) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [skills, setSkills] = useState([{ skill: '' }, { skill: '' }, { skill: '' }]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.skills) {
      setSkills(Object.values(props.skills));
    }
  }, [props.skills]);

  useEffect(() => {
    skills.forEach((item, key) => {
      setValue(`skills[${key}].skill`, item.skill);
    });
  }, [setValue, skills]);

  const addNewClick = () => {
    const tempForm = [...skills];
    const tempEntry = { skill: '' };
    tempForm.push(tempEntry);
    setSkills(tempForm);
  };

  const deleteCard = (key) => {
    const tempForm = [...skills];
    tempForm.splice(key, 1);
    setSkills(tempForm);
  };

  const handleChange = (event, title, key) => {
    const tempForm = [...skills];
    tempForm[key] = { ...tempForm[key], [title]: event.target.value };
    setSkills(tempForm);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    if (props.skills !== null) {
      props.updatekeyskills(data.skills);
    } else {
      props.setkeyskills(data.skills);
    }
    setOpen(true);
  });

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[80%] md:ml-[10%] sm:w-[100%] justify-center items-center mt-10">
        <Typography color="primary" className="mt-4 sm:w-[100%] font-bold text-2xl text-center md:text-1xl" variant="h4">
          Key Skills Information
        </Typography>

        <Divider>
          <BuildIcon color="primary" fontSize="large" />
        </Divider>

        {/* Card component */}
        <Card style={{ borderRadius: '5px', border: '2px solid', padding: '5vw 5vw' }}>
          {/* Input fields */}
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-8">
            {skills.map((item, key) => (
              <TextField
                key={key}
                label={`Skill ${key + 1}`}
                {...register(`skills[${key}].skill`, { required: true })}
                value={item.skill}
                error={errors?.skills && errors.skills[key]?.skill}
                helperText={errors?.skills && errors.skills[key]?.skill && 'Skill is required'}
                onChange={(e) => handleChange(e, 'skill', key)}
              />
            ))}
          </Box>

          {/* Add new skill Tab Button */}
          {skills.length <= 10 && (
            <Typography onClick={addNewClick} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
              Add New
            </Typography>
          )}
          {/* Delete skill Tab Button */}
          {skills.length !== 1 && (
            <Typography onClick={deleteCard} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
              Delete
            </Typography>
          )}

              {/* Details Submit button */}
          <Button
            style={{ marginLeft: "40%", backgroundColor: 'green', color: '#fff', width: '20%' }}
            type="submit"
            onClick={onSubmit}
          >
            {props.skills ? 'update' : 'submit'}
          </Button>
        </Card>
      </div>
      {/* Snackbar for success message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Personal Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyskills);
