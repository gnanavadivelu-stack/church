import React from 'react';

function ErrorMessage(props) {
    const { errorCode } = props;

    function getErrorMessage() {
        switch(errorCode) {
            case 'anonymous-auth-failed':
                return 'Anonymous authentication failed. Try again.'
            default:
                return 'Oops, something went wrong.';
        }
    }

    return errorCode ? <p className="error">{getErrorMessage()}</p> : null;
};

export default ErrorMessage;
