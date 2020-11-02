import * as React from 'react';
import './Footer.scss';

interface FooterProps {
    children: React.ReactNode;
}

export default function Footer(porps: FooterProps) {
  return <div className="footer">{porps.children}</div>;
}
