import React from 'react';

function EmoteButton({ imageSrc, onClick }) {
    return (
        <button
            className="m-2"
            onClick={onClick}
        >
            <img src={imageSrc} alt="Emote" width={30} height={30}/>
        </button>
    );
}

export default EmoteButton;
