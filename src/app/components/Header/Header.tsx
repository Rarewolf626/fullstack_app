/**
 * Header component which is full width solid bar at top of screen
 * - Logo
 * - Navigation menu
 * - User icon
 */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    showUserIcon?: boolean;
    menuItems?: MenuItem[];
}

interface MenuItem {
    label: string;
    to: string;
}

const Header: React.FC = ({
    showUserIcon = false,
    menuItems = []
}: HeaderProps) => {

    const renderMenuItems = () => {
        if (menuItems.length === 0) {
            return null;
        }

        return (
            <ul>
            {menuItems.map(({label, to}: MenuItem, i:number) => {
                return (
                    <li key={`menu-item-${i}`}>
                        <Link href={to}>{label}</Link>
                    </li>
                )
            })}
            </ul>
        )
    }

    return (
        <div className="header">
            <h2>RentWheelz</h2>
            {/* Navigation menu */}
            <nav>
                {renderMenuItems()}
            </nav>

            {/* User icon */}
            {showUserIcon && (
            <button>
                <Image src="/user.png" alt="User" />
            </button>                
            )}
      
        </div>
    );
};

export default Header;