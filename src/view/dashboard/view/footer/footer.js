import React from 'react';

const Footer = () => {

    return (
        <div className="footer u-margin-top-big">

                <p className="footer__text u-center-text .u-margin-bottom-medium">
                    	Application are open for YC Winter 2021
                </p>

                <div className="footer__navigation  u-center-text">
                    <ul className="footer__list u-center-text">
                        <li className="footer__item "><a href="#" className="footer__link">Guidelines</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Api</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Security</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Lists</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Bookmarket</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Legal</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Apply to YC</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                    </ul>
                </div>

                <form action="#" className="search u-margin-top-big">
                    <input type="text" className="search__input" placeholder="Search" />
                    
                </form>

                

            </div>

    )
}

export default Footer;