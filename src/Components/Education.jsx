import { connect } from 'react-redux';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import fieldCd from '../Redux/constants/typeCodes';
import SchoolIcon from '@mui/icons-material/School';
import { seteducation, updateeducation } from '../Redux/actions/seteducation';
import { Button, Box, Card, TextField, Snackbar, Alert, Divider } from "@mui/material";
import Typography from '@mui/material/Typography';



const mapStateToProps = (state) => {
  return {
    education: state.educationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    seteducation: (education) => dispatch(seteducation(education)),
    updateeducation: (education) => dispatch(updateeducation(education)),
  };
};

const Education = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    if (props.education !== null) {
      props.updateeducation(data);
    } else {
      props.seteducation(data);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[80%] md:ml-[10%] sm:w-[100%] justifty-center items-center mt-10">
        <Typography color="primary" className="mt-4 font-bold text-2xl text-center md:text-1xl" variant="h4">
          Educational Information
        </Typography>

        <Divider>
          <SchoolIcon color="primary" fontSize="large" />
        </Divider>

        {/* Card component */}
        <Card style={{ borderRadius: '5px', border: "2px solid", padding: "5vw 5vw" }}>
          {/* Input fields */}
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl">
            <TextField
              label='Type'
              {...register(fieldCd.Type, { required: true })}
              defaultValue={props.education ? props.education[fieldCd.Type] : ''}
              error={errors[fieldCd.Type] ? true : false}
              helperText={errors[fieldCd.Type] && "Type is required"}
            />
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-4">
            <TextField
              label='University'
              {...register(fieldCd.University, { required: true })}
              defaultValue={props.education ? props.education[fieldCd.University] : ''}
              error={errors[fieldCd.University] ? true : false}
              helperText={errors[fieldCd.University] && "University is required"}
            />

            <TextField
              label='Degree'
              {...register(fieldCd.Degree, { required: true })}
              defaultValue={props.education ? props.education[fieldCd.Degree] : ''}
              error={errors[fieldCd.Degree] ? true : false}
              helperText={errors[fieldCd.Degree] && "Degree is required"}
            />
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto w-50vw mt-4">
            <TextField
              label='Start Year'
              {...register(fieldCd.Startyear, { required: true })}
              defaultValue={props.education ? props.education[fieldCd.Startyear] : ''}
              error={errors[fieldCd.Startyear] ? true : false}
              helperText={errors[fieldCd.Startyear] && "Start-Year is required"}
            />

            <TextField
              label='End Year'
              {...register(fieldCd.Endyear, { required: true })}
              defaultValue={props.education ? props.education[fieldCd.Endyear] : ''}
              error={errors[fieldCd.Endyear] ? true : false}
              helperText={errors[fieldCd.Endyear] && "End-Year is required"}
            />
          </Box>

          {/* Details Submit button */}
          <div style={{ marginTop: "2vw" }}>
            <Button style={{ marginLeft: "40%", backgroundColor: "green", color: "#fff", width: "20%" }} type="submit" onClick={handleSubmit(onSubmit)}>
              {props.education ? 'Update' : 'Submit'}
            </Button>
          </div>
        </Card>
      </div>
      {/* Snackbar for success message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Educational Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
