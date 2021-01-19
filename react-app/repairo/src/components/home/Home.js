import React from 'react'
import { homeObjOne, homeObjTwo, homeObjFour } from '../home/HomeHelpers';
import  InfoSectionHome from './info/InfoSectionHome';
 import Pricing from './pricing/Pricing'

function Home() {
    
    return (
        <div>  
          <InfoSectionHome {...homeObjOne} />
          <InfoSectionHome {...homeObjTwo} />
          <Pricing />
          <InfoSectionHome {...homeObjFour} /> 
          </div>
        
        
      );
    }

export default Home;





 


