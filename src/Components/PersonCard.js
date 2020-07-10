import React from 'react';


    const PersonCard = props => {
        return(
            <div>
                <div className="container">
                    <div className="card mt-4 mx-auto w-50">
                        <div className="card-header bg-dark text-white">
                            <h1>{props.lastName}, {props.firstName}</h1>
                        </div>
                        <div className="card-body bg-success">
                            <p>Age: {props.age}</p>
                            <p>Hair Color: {props.hairColor}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default PersonCard;