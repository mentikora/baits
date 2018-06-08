import React from 'react';

import { VsoConsumer } from '../../contexts/vso';
import WelcomeSection from './../../components/welcome';
import BaitPreviewWrapper from './../../components/bait-preview-wrapper';
import AboutBaitTypes from './../../components/about-bait-types';
import BaitColors from './../../components/bait-colors';
import Delivery from './../../components/delivery';
import Video from './../../components/video';

export default () => (
  <VsoConsumer>
    {({ vso, loading }) => (
      <div className="homepage-components-wrapper">
        {/* {
          loading
            ? 'SPINNER'
            : <pre>
                {JSON.stringify(vso, null, 2)}
              </pre>
        } */}
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
    
        {/* youtube */}
        <Video src={'https://www.youtube.com/embed/RBqSabaz9Vk'}/>
    
      </div>
    )}
  </VsoConsumer>    
)