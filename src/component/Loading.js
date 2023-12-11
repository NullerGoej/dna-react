import React from 'react';
import './Loading.scss';

const Loading = () => {
    React.useEffect(() => {
        setTimeout(() => {
            document.querySelector('.loading').style.opacity = '0';
        }, 100);
        setTimeout(() => {
            document.querySelector('.loading').style.display = 'none';
        }, 400);
    }, []);
    return (
        <div className="loading">
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;