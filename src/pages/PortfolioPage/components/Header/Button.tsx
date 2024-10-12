import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => (
    <div className={`px-3 mx-2`}>
        <a href={props.link}>
            <h2>{props.children}</h2>
        </a>
    </div>
);

export default Button;