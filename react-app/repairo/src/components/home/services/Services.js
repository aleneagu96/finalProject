import React from 'react';
import  InfoSection from '../../home/info/InfoSection';
import Pricing  from '../pricing/Pricing';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './ServicesHelpers';

function Services() {
  return (
    <>
      <Pricing/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;