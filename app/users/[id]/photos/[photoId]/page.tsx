import React from 'react';

interface PhotoPageProps {
    params: {
        id: number;
        photoId: number;
    }
}

const PhotoPage = ({params: {id, photoId}} : PhotoPageProps) => {
    return (
        <div>
            <div>PhotoPage</div>
            <p>{id}</p>
            <p>{photoId}</p>
        </div>
    );
};

export default PhotoPage;