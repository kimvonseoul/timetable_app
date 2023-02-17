import React from 'react';
import Profiles from './Profiles'
import ProfTable from './ProfTable';
const ProfPage = () => {
    return(
        <>
            <section id="contents">
                <ProfTable />
                <Profiles />
            </section>
        </>
    )
}

export default ProfPage;