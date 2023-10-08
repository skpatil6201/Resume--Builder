import {
  Divider,
  Typography
} from "@mui/material";

import {
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

import { Box } from "@mui/system";
import ShareIcon from '@mui/icons-material/Share';
import SchoolIcon from '@mui/icons-material/School';
import Header from '../../Components/Header/Header';
import AboutUsImage from './../../Components/images/aboutus.jpg';

function Aboutus() {
  const rootUrl = () => {
    return window.location.host;
  }

  return (
    <>
      {/* Header Component to Navigate */}
      <Header />

      {/* Main Content */}
      <div className='items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
        <Typography 
          gutterBottom
          variant="h3"
          color="primary"
          component='div'
          sx={{
            fontSize: {
              xs: "1.875rem",
              lg: "2.875rem",
              md: "1.875rem",
              sm: "1.875rem",
            }
          }}
          className="font-bold text-center mb-[2vw]"
        >
          <Box fontWeight='fontWeightMedium' display='inline'>
            ❝ Welcome to our Resume Builder ! ❞
          </Box>
        </Typography>
        <Divider className="mb-5">
          <SchoolIcon color="primary" fontSize="large" />
        </Divider>
        <Typography
          gutterBottom
          variant="body1"
          color="primary"
          sx={{
            marginTop: '20px',
            fontSize: {
              xs: "13px",
              sm: "15px",
              md: "17px",
              lg: "19px",
            },
            paddingRight: {
              xs: "15px",
              sm: "18px",
              lg: "25px",
            },
            textAlign: "justify"
          }}
        >
         We recognize the significance of crafting a compelling and influential resume. We are firm believers that a meticulously tailored resume can have a substantial impact on your job hunt, setting you apart from your competitors and bringing you closer to securing your ideal career.
          <br /> 
          
          <div class="md:inline-flex my-10 md:ml-10 shadow rounded-sm w-full justify-center">
            {/* About us image */}
            <img src={AboutUsImage} alt="Logo" class="object-auto object-center" />
          </div>

          <br /> 
          Our Resume Builder is designed to simplify the resume creation process,
          offering a user-friendly interface and a wide range of customizable templates. Whether
          you're a recent graduate, a seasoned professional, or making a career transition, our
          platform provides the tools and resources you need to create a compelling resume that
          highlights your skills, experience, and achievements.
        </Typography>
        
        <Divider className="mb-5">
          <ShareIcon color="primary" fontSize="large" />
        </Divider>

        <Typography 
          variant="h4" 
          gutterBottom 
          color="primary" 
          className='mt-8 font-bold text-center'
        >
          Share with Your Friends.
        </Typography>

        <Box mt="25px" mb="25px" className='mt-8 flex justify-center'>
          <Box
            className="icons"
            sx={{
              display: 'flex',
              gap: '10px'
            }}
          >
            {/* Facebook share button */}
            <FacebookShareButton
              url={rootUrl()}
              hashtag={'#portfolio...'}
              quote={'Title or jo bhi aapko likhna ho'}
            >
              <FacebookIcon className='buttonIcons' size={40} round={true} />
            </FacebookShareButton>

            {/* LinkedIn share button */}
            <LinkedinShareButton
              url={rootUrl()}
              hashtag={'#portfolio...'}
              quote={'Title or jo bhi aapko likhna ho'}
            >
              <LinkedinIcon className='buttonIcons' size={40} round={true} />
            </LinkedinShareButton>

            {/* WhatsApp share button */}
            <WhatsappShareButton
              url={rootUrl()}
              hashtag={'#portfolio...'}
              quote={'Title or jo bhi aapko likhna ho'}
            >
              <WhatsappIcon className='buttonIcons' size={40} round={true} />
            </WhatsappShareButton>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Aboutus;