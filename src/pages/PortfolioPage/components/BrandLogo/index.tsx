import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
    children?: React.ReactNode;
    link: string;
    disabled?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = (props: BrandLogoProps) => (
    <Link to={props.link}>
        <h1 className='text-3xl font-bold'>
            {props.children}
        </h1>
    </Link>
)

export default BrandLogo;