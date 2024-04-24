import React from 'react';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import LeadershipsAndActivities from '../components/LeadershipsAndActivities';

type Props = {}

const Experience: React.FC<Props> = (_) => {
    return (
        <>
            <Education />
            <WorkExperience />
            <LeadershipsAndActivities />
        </>
    );
}

export default Experience;