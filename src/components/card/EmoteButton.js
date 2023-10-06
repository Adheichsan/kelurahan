import React from 'react';
import Image from 'next/image';

function EmoteButton({ imageSrc, onClick }) {
    return (
        <button
            className="m-2"
            onClick={onClick}
        >
            <Image src={imageSrc} alt="Emote" width={30} height={30}/>
        </button>
    );
}

export default EmoteButton;
