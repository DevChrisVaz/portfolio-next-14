import React from 'react';

type Props = {
    children: string;
}

const H2: React.FC<Props> = (props) => {
    return (
        <h2 className="text-center text-3xl dark:text-white">{props.children}</h2>
    );
}

export default H2;