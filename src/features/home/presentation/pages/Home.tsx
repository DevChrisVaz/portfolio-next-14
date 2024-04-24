import React from 'react';
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import ProjectsPreview from '../components/ProjectsPreview';
import Tecnologies from '../components/Tecnologies';
import H2 from '@/common/components/Heading/H2';

type Props = {}

const Home: React.FC<Props> = (_) => {
    return (
        <>
            <Hero />
            <IconSection />
            <H2>Technologies</H2>
            <Tecnologies />
            <H2>Projects</H2>
            <ProjectsPreview />
        </>
    );
}

export default Home;