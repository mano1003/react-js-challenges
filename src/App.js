import React, { useState } from 'react';
import StarRating from "./Rating/RatingComponent";

function App() {
    const [ratingMsgDisplay, setRatingMsgDisplay] = useState('');
    const ratingChange = (rating) => {
        if (rating < 4) {
            setRatingMsgDisplay("Thanks for your rating. We will try to improve our service to serve you better.");
        } else if (rating === 5) {
            setRatingMsgDisplay("Thanks for your appreciation.");
        } else {
            setRatingMsgDisplay("Thanks for your rating. We will strive to serve you better");
        }
    }
    return (
        <>
            <StarRating onRatingChange = {ratingChange}/>
            <br />
            <strong>{ratingMsgDisplay}</strong>
        </>
    );
}

export default App;