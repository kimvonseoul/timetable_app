import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

let days = ['Mon', 'Tue', 'Wed', "Thu", "Fri"];

const Timetable = (props: any) =>{
    let datas = props.state.class_reducer.classes;
    console.log(datas);
    return(
        <div id="timetable">
            <h2 id="timetable_title">Your Timetable</h2>
            <div className="table">
                <table >
                    <thead>
                        <tr>
                            {days.map((e:any, i:any)=>{return <th key={i}>{e}</th>})}
                        </tr>
                    </thead>
                   <tbody>
                       {datas.map((e:any,i:any)=><tr key={i}>{e.map((e:any,k:any)=>{
                           let link = 'date='+ String(i) + String(k)+ '&className=' + e.class + '&room=' + e.classroom;
                           //console.log(url);
                           let url = '/edit?' + link;
                           return <td key={k}><Link to={url} id="link-box"><h4>{e.class}</h4><p>{e.classroom}</p></Link></td>})}</tr>)}
                   </tbody> 
                </table>
            </div>   
        </div>
    );
}
function mapStateToProps(state: any) {
    return {
        state: state
    };
  }

export default connect(mapStateToProps)(Timetable);