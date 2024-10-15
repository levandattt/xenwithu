import React from 'react';
interface SectionProps {
    title: string;
    subTitle?: string;
}

const SectionHeader: React.FC<SectionProps> = (props) => (
    <div className={`flex flex-col items-center my-5`}>
        <h2 className={``}>{props.subTitle}</h2>
        <h1 className={`text-5xl font-bold`}>{props.title}</h1>
    </div>
);

export default SectionHeader;