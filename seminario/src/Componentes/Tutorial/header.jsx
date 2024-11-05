import React from 'react';
import { useNavigate } from 'react-router-dom';
import carpinchoLogo from '../../img/carpincho-moneda.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="tutorial-header">
            <button onClick={() => navigate(-1)} className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <img src={carpinchoLogo} alt="Logo" className="logo" />
            <button className="settings-button">
                <FontAwesomeIcon icon={faGear} />
            </button>
        </div>
    );
};

export default Header;
