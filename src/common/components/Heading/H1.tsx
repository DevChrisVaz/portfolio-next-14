import React from 'react';

type Props = {
    children: string;
}

const H1: React.FC<Props> = (props) => {
    return (
        <h1 className="text-4xl dark:text-white">{props.children}</h1>
    );
}

export default H1;