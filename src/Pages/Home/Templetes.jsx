import temp from '../../Data/data';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import TempleteCard from './TempleteCard';
import StyleIcon from '@mui/icons-material/Style';
import { Divider, Typography } from '@mui/material';
import Header from '../../Components/Header/Header';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { settemplate, updatetemplate } from '../../Redux/actions/settemplate';

const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template))
  };
};

function Templetes(props) {
  const [template,] = useState(temp);

  return (
    <>
      {/* Header Component for Navigation */}
      <Header />

      <Typography 
        mt="50px"
        variant="h3"
        gutterBottom
        color='primary'
        component='div'
        sx={{
          fontSize: {
            xs: "1.875rem",
            lg: "2.875rem",
            md: "1.875rem",
            sm: "1.875rem",
          }
        }}
        className="mt-8 font-bold text-3xl text-center md:text-5xl" 
      >
        Templates
      </Typography>

      <Typography 
        variant="h3"
        gutterBottom
        color='primary'
        component='div'
        sx={{
          fontSize: {
            xs: ".875rem",
            lg: "1.875rem",
            md: ".875rem",
            sm: ".875rem",
          }
        }}
        className="mt-4 font-bold text-xl text-center md:text-2xl" 
      >
        Select a Template to Create Your Resume
      </Typography>

      <Divider>
        <StyleIcon color="primary" fontSize="large" />
      </Divider>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl mt-8 px-8">
        {/* Iterate over each template and render a TemplateCard component */}
        {template.map((templates) => (
          <TempleteCard
            key={templates.key}
            data={templates.data}
            thumbnail={templates.thumbnail}
          />
        ))}
      </div>

      <Divider>
        <ViewCarouselIcon color="primary" fontSize="large" />
      </Divider>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Templetes);
