import React from 'react'
import './SquareContainer.css';

const SquareContainer = ({ title, totalHours, lastWeekHours }) => {
    return (
        <div className='squareContainer'>
            <div className='col'>
                <span className='title'>{title}</span>
                <span className='totalHours'>{totalHours} hrs</span>
                <span className='lastWeekHours'>Last Week - {lastWeekHours} hours</span>
            </div>
        </div>
    )
}

export default SquareContainer
