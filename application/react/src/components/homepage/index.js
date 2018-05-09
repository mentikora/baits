import React from 'react';

import WelcomeSection from './../../components/welcome';
import BaitPreviewWrapper from './../../components/bait-preview-wrapper';
import AboutBaitTypes from './../../components/about-bait-types';
import BaitColors from './../../components/bait-colors';
import Delivery from './../../components/delivery';

export default () => (
  <div className="homepage-components-wrapper">

    {/* welcome section */}
    <WelcomeSection />

    {/* baits overview section */}
    <BaitPreviewWrapper />

    {/* about bait types section */}
    <AboutBaitTypes />

    {/* bait colors overview */}
    <BaitColors />

    {/* about delivery section */}
    <Delivery />

  </div>
)