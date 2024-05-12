/**
 * A react button component that can render different types of buttons depending
 * on the props:
 * 
 * @param {string} label - The text to display on the button
 * @param {function} onClick - The function to call when the button is clicked
 * @param {string} type - The type of button to render, options are primary, secondary. 
 *                        Primary has a button background while secondary is just all caps text.
 * @param {string} color - What color to render, options are red, yellow
 * @param {string} width - The width of the button, options are full or auto
 * @param {boolean} disabled - Whether the button is disabled (which grays it out also) or enabled
 * @returns a button element
 */
import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
    type: 'primary' | 'secondary';
    color: 'red' | 'yellow';
    width?: 'full' | 'auto';
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type, color, disabled = false }) => {
    const getButtonStyle = (): React.CSSProperties => {
        switch (type) {
            case 'primary':
                return {
                    backgroundColor: color === 'red' ? 'red' : 'yellow',
                    color: 'white',
                };
            case 'secondary':
                return {
                    textTransform: 'uppercase',
                    color: color === 'red' ? 'red' : 'yellow',
                };
            default:
                return {};
        }
    };

    return (
        <button
            style={getButtonStyle()}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;