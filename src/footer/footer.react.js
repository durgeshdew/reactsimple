import React from 'react';



const footer = (props) => {

    return (
        <footer>
            <p>Designed by: {props.info.designer}
                <span> ({props.info.copyRight})</span>
            </p>
        </footer>
    );

}

export default footer;