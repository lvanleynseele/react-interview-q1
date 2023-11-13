import React from 'react';

function ClearButton(props) {
    const { nameValue, handleNameChange } = props;

    const handleClear = () => {
        if (nameValue) {
            handleNameChange('');
        }
    };

    return (
        <button onClick={handleClear}>Clear</button>
    );
}

export default ClearButton;
