import React from 'react';

let days = ['Mon', 'Tue', 'Wed', "Thu", "Fri"];
const ProfTable = () => {
    return(
        <div id="timetable">
            <h2 id="timetable_title">Your Timetable</h2>
            <div className="table"></div>
        </div>
    )
}

export default ProfTable;