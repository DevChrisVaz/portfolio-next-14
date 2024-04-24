import React from 'react';
import ProjectHero from '../../components/ProjectHero';
import ProjectArticle from '../../components/ProjectArticle';

type Props = {
    name: string;
    shortDescription: string;
}


const WebProject: React.FC<Props> = (props) => {
    
    return (
        <>
            <ProjectHero 
                name={props.name}
                shortDescription={props.shortDescription}
            />
            <ProjectArticle />
        </>
    );
}

export default WebProject;