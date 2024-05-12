'use client'

/**
 * A My bookings page that displays a list of car card components for each booking. 
 * The title is 'My Bookings' in an h2 tag
 * The car cards are rendered by the <BookingCard> component
 * There is a tabbed menu bar with 4 tabs, 'All', 'Confirmed', 'Completed', 'Cancelled',
 */
import React, { useState } from 'react';
import BookingCard from '@/components/BookingCard'

const MyBookingsPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    const renderTab = (tab: string) => {
        const isSelected = selectedTab === tab;
        const className = isSelected ? 'selected' : '';

        return (
            <li key={tab} className={className} onClick={() => handleTabClick(tab)}>
                {tab}
            </li>
        );
    };

    return (
        <div>
            <h2>My Bookings</h2>
            <div>
                {/* Tabbed menu bar */}
                <ul>
                    {['All', 'Confirmed', 'Completed', 'Cancelled'].map(renderTab)}
                </ul>
            </div>
            <div>
                {/* Render car card components for each booking */}
                <BookingCard picture={''} title={''} description={''} onReserve={function (): void {
                    throw new Error('Function not implemented.');
                } } />
                {/* Add more BookingCard components as needed */}
            </div>
        </div>
    );
};

export default MyBookingsPage;