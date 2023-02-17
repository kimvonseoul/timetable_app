import React from 'react';
import Profiles from './Profiles';
import Timetable from './Timetable';
import './css/Contents.css';

const Contents = () =>{
    return(
        <section id="contents">
            <Timetable />
            <Profiles />
        </section>
    )
}
export default Contents;