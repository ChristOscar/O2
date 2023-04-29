import React from "react";
import "./Grid.css"; // import the CSS file
import competition from '../../images/competition.jpg';
import socialInteraction from '../../images/social-interaction.jpg';
import equipment from '../../images/equipment.jpg';
import healthBenefits from '../../images/health-benefits.jpg';
import nature from '../../images/nature.jpg';
import physicalActivity from '../../images/physical-activity.jpg';
import weather from '../../images/weather.jpg';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={nature} alt="Nature" />
        <div className="grid-item-text">Nature1</div>
      </div>
      <div className="grid-item">
        <img src={physicalActivity} alt="Physical Activity" />
        <div className="grid-item-text">Physical Activity</div>
      </div>
      <div className="grid-item">
        <img src={equipment} alt="Equipment" />
        <div className="grid-item-text">Equipment</div>
      </div>
      <div className="grid-item">
        <img src={weather} alt="Weather" />
        <div className="grid-item-text">Weather</div>
      </div>
      <div className="grid-item">
        <img src={competition} alt="Competition" />
        <div className="grid-item-text">Competition</div>
      </div>
      <div className="grid-item">
        <img src={socialInteraction} alt="Social Interaction" />
        <div className="grid-item-text">Social Interaction</div>
      </div>
      <div className="grid-item">
        <img src={healthBenefits} alt="Health Benefits" />
        <div className="grid-item-text">Health Benefits</div>
      </div>
    </div>
  );
};

export default Grid;
