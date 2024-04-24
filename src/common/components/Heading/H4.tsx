import React from 'react';

type Props = {
    children: string;
}

const H4: React.FC<Props> = (props) => {
    return (
        <h4 className="text-xl dark:text-white">{props.children}</h4>
    );
}

export default H4;