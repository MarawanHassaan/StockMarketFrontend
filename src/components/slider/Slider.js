import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import './Slider.css'
export function Slider({ onUpdateButtonClicked }) {
  const [minYear, setMinYear] = useState(2011);
  const [maxYear, setMaxYear] = useState(2023);

  const priceGap = 1;

  const rangeMinRef = useRef();
  const rangeMaxRef = useRef();
  
  useEffect(() => {
    const rangeInputs = document.querySelectorAll('.range-input input');
    const priceInputs = document.querySelectorAll('.price-input input');
    const progress = document.querySelector(".slider .progress");

    attachEventListenersToRangeInputs(rangeInputs, progress);
    attachEventListenersToPriceInputs(priceInputs, rangeInputs, progress);
  });

  const attachEventListenersToRangeInputs = (rangeInputs, progress) => {
    rangeInputs.forEach(input => {
      input.addEventListener("input", e => {
          let minVal = parseInt(rangeInputs[0].value),
          maxVal = parseInt(rangeInputs[1].value);

          if(maxVal - minVal < priceGap) {
              if(e.target.className === "range-min"){
                rangeInputs[0].value = maxVal - priceGap;
              }
              else{
                rangeInputs[1].value = minVal + priceGap;
              }
          } else {
              setMinYear(minVal);
              setMaxYear(maxVal);

              progress.style.left = ( (minVal-2011)/(2023 - 2011) ) *100 + "%";
              progress.style.right = 100 - ( (maxVal-2011)/(2023 - 2011) ) *100 + "%";
          }
      });
    });
  }

  const attachEventListenersToPriceInputs = (priceInputs, rangeInputs, progress) => {
    priceInputs.forEach(input => {
      input.addEventListener("input", e => {
        if((maxYear - minYear >= priceGap) && maxYear <= 2023  && minYear >= 2011) {
            if(e.target.className === "input-min") {
              setMinYear(e.target.value);
              progress.style.left = ((minYear - 2011)/(2023 - 2011)) * 100 + "%";
            } else {
              setMaxYear(e.target.value);
              progress.style.right = 100 - ((maxYear - 2011) / (2023 - 2011)) * 100 + "%";
            }
        }
      });
    });
  }

  const onButtonClick = () => {
    onUpdateButtonClicked(minYear, maxYear);
  }

  return (
    <div className="sliderComponent">
      <div className="yearSlider">
        <div className="slider">
          <div className="progress" id="progress" />
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min="2011"
            max="2023"
            value={minYear}
            step="1"
            ref={rangeMinRef}
          />
          <input
            type="range"
            className="range-max"
            min="2011"
            max="2023"
            value={maxYear}
            step="1"
            ref={rangeMaxRef}
          />
        </div>
      </div>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" value={minYear} />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" value={maxYear} />
        </div>
        <Button variant="dark" onClick={onButtonClick}>Update chart</Button>{' '}
      </div>
    </div>
  );
}
