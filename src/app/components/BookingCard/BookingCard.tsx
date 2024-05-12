import React from 'react';

interface BookingCardProps {
    picture: string;
    title: string;
    description: string;
    onReserve: () => void;
}

import Image from 'next/image';

const BookingCard: React.FC<BookingCardProps> = ({ picture, title, description, onReserve }) => {
    return (
        <div className="card">
            <Image src={picture} alt="Card Picture" className="card-picture" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button className="reserve-button" onClick={onReserve}>Reserve</button>
        </div>
    );
};

export default BookingCard;