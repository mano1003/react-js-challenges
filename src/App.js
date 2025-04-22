import React from 'react';
//  { useState } 
// import StarRating from "./Rating/RatingComponent";
// import DynamicComponent from './DynamicComponent/DynamicComponent';
// import KanbanBoard from './Kanban-Board/KanbanBoard';
// import { defaultKanbanTasks } from './Kanban-Board/KanbanDefaultTasks';
// import AddressBook from './AddressBook/AddressBook_UsingSocket';
// import { cartGroupsData } from './Group_Cart/CartGroups';
// import Cart from './Group_Cart/CartGroup';
// import CartMainSubCategories from './Group_Cart/CartMainCategory_SubCategory';
// import MortgageLoan from './MortgageLoan/MortgageLoan';
// import RestaurantFinder from './RestaurantFinder/RestaurantFinder';
import IncrementDecrementComp from './Increment-Decrement/IncrementDecrementComp';

function App() {
    /*
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
        */
    return (
        <>
            {/*
                <StarRating onRatingChange = {ratingChange}/>
                <br />
                <strong>{ratingMsgDisplay}</strong>

                <br />
                <strong>Dynamic Component - Custom Hook</strong>
                <DynamicComponent />
                <br />
                
                <h1 style={{textAlign: 'center'}}>Kanban Board</h1>
                <br />
                <KanbanBoard tasks={defaultKanbanTasks} />
            */}
            {/*
            <h1 style={{textAlign: 'center'}}>Create and Update Address Book Using Socket</h1>
            <br />
            <AddressBook />
           
            <Cart cartItems={cartGroupsData} />
            <CartMainSubCategories /> 
            
            <MortgageLoan />
            
            <RestaurantFinder />
            */}
            <IncrementDecrementComp />
        </>
    );
}

export default App;