import React from 'react';

type Props = {
    children: string;
}

const H5: React.FC<Props> = (props) => {
    return (
        <h5 className="text-lg dark:text-white">{props.children}</h5>
    );
}

export default H5;