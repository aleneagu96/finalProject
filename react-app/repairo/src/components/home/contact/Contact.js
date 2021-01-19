import React from 'react';
import  InfoSectionHome from '../../home/info/InfoSectionHome';


import { homeObjOne} from './ContactHelpers';

function Contact() {
  return (
    <>

      <InfoSectionHome {...homeObjOne} />
     
    </>
  );
}

export default Contact;