import { stringify } from 'querystring';
import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const EditModal = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const date:any = searchParams.get('date');
    const className = searchParams.get('class');
    const cn:any = className;
    const room = searchParams.get('room');
    console.log(date);
    console.log(className);
    console.log(room);
    const d = date[0]
    const dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const dateTime = dates[date[1]];
    //console.log(dateTime);
    const period = Number(date[0]) + 1;
    return (
        <div id="modal">
            <Link to='/' id="x">X</Link>
            <h2>{dateTime} {period}'s period </h2>
            <input type="text" value={cn}/>
        </div>
    );
}
export default EditModal;