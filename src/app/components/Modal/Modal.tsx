/**
 * Modal component that is a popul appearing over current screen.
 * It should be styled using Tailwdind CSS and should have the following features:
 * - A title at the top of the modal that says Reserve {Car Name}
 * - It closes when clicking outside the modal
 * - a background overlay that darkens the screen
 * - A date input for pickup date with a calendar date picker icon button
 * - a date input for the return date with a calendar date picker icon button
 * - Number of passengers input
 * - A reserve button
 * - a cancel button
 */
import React, { useState } from 'react';

interface ModalProps {
    carName: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ carName, onClose }) => {
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState('');

    const handlePickupDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPickupDate(event.target.value);
    };

    const handleReturnDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReturnDate(event.target.value);
    };

    const handlePassengersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassengers(event.target.value);
    };

    const handleReserveClick = () => {
        // Handle reserve logic here
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2 className="modal-title">Reserve {carName}</h2>
                <div className="modal-content">
                    <div className="modal-input">
                        <label htmlFor="pickupDate">Pickup Date</label>
                        <input
                            type="date"
                            id="pickupDate"
                            value={pickupDate}
                            onChange={handlePickupDateChange}
                        />
                    </div>
                    <div className="modal-input">
                        <label htmlFor="returnDate">Return Date</label>
                        <input
                            type="date"
                            id="returnDate"
                            value={returnDate}
                            onChange={handleReturnDateChange}
                        />
                    </div>
                    <div className="modal-input">
                        <label htmlFor="passengers">Number of Passengers</label>
                        <input
                            type="number"
                            id="passengers"
                            value={passengers}
                            onChange={handlePassengersChange}
                        />
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="modal-button" onClick={handleReserveClick}>
                        Reserve
                    </button>
                    <button className="modal-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;