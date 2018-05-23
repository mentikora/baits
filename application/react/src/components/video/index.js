import React from 'react';
import './styles.css';

export default () => (
  <section className="iframe-section">
    <div className="content">
      <div className="iframe-wrapper">
        <iframe 
          width="600" 
          height="300" 
          title="This is a unique title"
          src="https://www.youtube.com/embed/RBqSabaz9Vk?rel=0&amp;controls=0&amp;showinfo=0"
        />
      </div>
    </div>
  </section>
)
