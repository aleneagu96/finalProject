import React from 'react';
import { Button } from '../GlobalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './PricingHelpers';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Software repair </PricingCardPlan>
                <PricingCardCost>$50</PricingCardCost>
                <PricingCardLength>need to fix that phone?</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Get those bugs fixed</PricingCardFeature>
                  <PricingCardFeature>Get your phone backed up</PricingCardFeature>
                  <PricingCardFeature>30 minutes </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Come meet us</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Battery replacement</PricingCardPlan>
                <PricingCardCost>$70</PricingCardCost>
                <PricingCardLength>*price depends on the device*</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Quality guaranteed</PricingCardFeature>
                  <PricingCardFeature>Quick setup</PricingCardFeature>
                  <PricingCardFeature>Forget your charger home</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Change that battery</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contact'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Display replacement</PricingCardPlan>
                <PricingCardCost>$90</PricingCardCost>
                <PricingCardLength>*price depends on the device*</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Will look brand new</PricingCardFeature>
                  <PricingCardFeature>Quality guaranteed</PricingCardFeature>
                  <PricingCardFeature>Quick setup</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Fix that screen</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;