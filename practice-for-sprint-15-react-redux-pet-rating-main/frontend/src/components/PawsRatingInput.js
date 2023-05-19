import { useState } from 'react';

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

const handleEnter = (e) => {
  console.log("entered")
  if (!disabled) {
    let pawPos = e.currentTarget.dataset.index
    console.log(pawPos)
    setActiveRating(pawPos);
  }
}

const handleLeave = (e) => {
  if (!disabled) {
    setActiveRating(rating);
  }
}

  const divPaws = () => {
    let paws = [];
    for (let i = 1; i < 6; i++) {
      paws.push(
        <div key={i} data-index={i} className={i <= activeRating ? "filled" : "empty"} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <i className="fa fa-paw"></i>
        </div>
      )
    }

    return paws;
  }
  
  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
        />

      <div className="rating-input">
        {divPaws()}
      </div>
    </>
  );
};

export default PawsRatingInput;