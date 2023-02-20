import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {connect} from 'react-redux'
import './css/ProfTable.css'
import { any } from 'prop-types';

let days = ['Mon', 'Tue', 'Wed', "Thu", "Fri"];

const ProfTable = (props: any) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const username = searchParams.get('username');
    const name = searchParams.get('name');
    const reducerData = props.state.profile_reducer;
    console.log(reducerData.profiles[0].username);
    function classData() {
        for(var item of reducerData.profiles){
            console.log(item);
            if(item.username == username){
                return item.classes;
            }
        }
    }
    return(
        <div id="timetable">
            <header id="prof_header">
                <Link className='header_btn' to='/'>home</Link>
                <h2 >{name}'s Timetable</h2>
                <Link className='header_btn' to='/message?'>message</Link>
            </header>
            
            <div className="table">
                <table>
                    <thead><tr>{days.map((e:any, k:any)=>{
                        return <th key={k}>{e}</th>
                    })}</tr></thead>
                    <tbody>
                        {classData().map((e:any, i:any)=><tr key={i}>{e.map((e:any,k:any)=>{
                return <td key={k}><h4>{e.class}</h4><p>{e.classroom}</p></td>})}</tr>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        state: state,
    }
}
export default connect(mapStateToProps)(ProfTable);