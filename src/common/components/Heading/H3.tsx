import React from 'react';

type Props = {
    children: string;
}

const H3: React.FC<Props> = (props) => {
    return (
        <h3 className="text-2xl dark:text-white">{props.children}</h3>
    );
}

export default H3;