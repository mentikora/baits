import React from 'react';
import './styles.css';

export default ({src}) => (
  <section className="iframe-section">
    <div className="content">
      <div className="iframe-wrapper">
        <iframe 
          width="600" 
          height="300" 
          title="This is a unique title"
          src={`${src}?rel=0&amp;controls=0&amp;showinfo=0`}
        />
      </div>
    </div>
  </section>
)
