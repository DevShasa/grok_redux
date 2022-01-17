import React from "react";

export default function FlashMessage(props){
    return(
        <div className="tasks-loading">
            {props.message}
        </div>
    )
}

Error.defaultProps = {
    message: 'An error has occured'
}