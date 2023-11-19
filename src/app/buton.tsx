
import React, { useState } from 'react';

const Button = () => {
    const [effect, setEffect] = useState(false);

    return (
        <button
        className={`${
            effect && "animate-wiggle"
        } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
        onClick={() => {
            setEffect(true);
        }}
        onAnimationEnd={() => setEffect(false)}
        >
        Wiggle wiggle...
        </button>
    );
};

export default Button;
