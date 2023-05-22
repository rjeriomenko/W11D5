import { useEffect, useState } from 'react';

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  const handleEnter = (e) => {
    if (!disabled) {
      let pawPos = e.currentTarget.dataset.index
      setActiveRating(pawPos);
    }
  }

  const handleLeave = (e) => {
    if (!disabled) {
      setActiveRating(rating);
    }
  }

  const onClick = (e) => {
    if (!disabled) {
      // rating = Number(e.currentTarget.dataset.index); //this does not persist
      // setActiveRating(rating);
      onChange(e)
    }
  }

  useEffect(() => setActiveRating(rating), [rating]);

  const divPaws = () => {
    let paws = [];
    for (let i = 1; i < 6; i++) {
      paws.push(
        <div key={i} data-index={i} className={i <= activeRating ? "filled" : "empty"} 
        onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={onClick}>
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