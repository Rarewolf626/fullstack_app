'use client';
import React, { useEffect, useState } from 'react';
import CarCard from '@/components/CarCard';

interface Car {
    title: string
    picture: string
    price: number
    mileage: number
    transmission: string
    fuel: string
    year: number
    engine: number
}

const Cars: React.FC = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('/api/cars');
                const data = await response.json();
                const carsArray = data.cars
                setCars(data.cars)
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div className="listings-page">
            <h1>Available Cars</h1>
            <div className="car-grid">
                {cars.map(({title, picture, description}: Car) => (
                    <CarCard key={``} picture={picture} title={title} description={description}/>
                ))}
            </div>
        </div>
    );
};

export default Cars;