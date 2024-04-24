import React from 'react';

type Props = {
    children: string;
}

const H6: React.FC<Props> = (props) => {
    return (
        <h6 className="text-base dark:text-white">{props.children}</h6>
    );
}

export default H6;