import React from "react";
const Store = (props) => {
    const { image, name, description, website } = props;

    return (
        <div className="store">
            <img src={image} alt={name} className="store-image" />
            <h2 className="store-name">{name}</h2>
            <p className="description">{description}</p>
            
            <a href={website} className="store-website" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </div>
    );
};

export default Store;