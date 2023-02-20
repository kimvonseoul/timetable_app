import { stringify } from 'querystring';
import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { class_save, class_delete } from './reducers/class_reducer';

  
  const EditModal = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const date:any = searchParams.get('date');
    const className:string = searchParams.get('className')|| '';
    const room:string = searchParams.get('room')||'';
    console.log(date);
    console.log(className);
    console.log(room);
    const dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const dateTime:string = dates[date[1]];
    const period = Number(date[0]) + 1;
    const [inputClass, setClassValue] = useState(className);
    const [inputRoom, setRoomValue] = useState(room);

    const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClassValue(event.target.value);
        console.log(event.target.value);
    };
    const handleRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomValue(event.target.value);
        console.log(event.target.value);
    };
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
        dateID: date[1],
        period: date[0],
        className: inputClass,
        classroom: inputRoom,
    };
    dispatch(class_save(data));
    navigate('/');
};
const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      dateID: date[1],
      period: date[0],
    };
    dispatch(class_delete(data));
    navigate('/');
  };
    return (
        
        <div id="modal">
            <Link to='/' id="x">X</Link>
            <h2>{dateTime} {period}'s period </h2>
            <form onSubmit={handleSubmit}>
                <input className="modal-input" type="text" name='inputClass' value={inputClass} onChange={handleClassChange} />
                <input className="modal-input" type="text" name='inputRoom' value={inputRoom} onChange={handleRoomChange} />
                <button id="submit" type="submit" value="Submit">Save</button>
                <button id="submit" type="submit" value="delete" onClick={handleDelete}>Delete</button>
            </form>
            
        </div>
    );
}
export default EditModal;