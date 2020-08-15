import * as React from 'react';
import './footer.scss';

interface FooterProps {
    children: React.ReactNode;
}

const Footer = (porps: FooterProps) => <div className="footer">{porps.children}</div>;

export default Footer