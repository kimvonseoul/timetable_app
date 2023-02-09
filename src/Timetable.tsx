import React from 'react';
import {Link} from 'react-router-dom';
let days = ['Mon', 'Tue', 'Wed', "Thu", "Fri"];
let s = [
    [
        {class:' ', classroom:' '},
        {class: 'math', classroom:'405'},
        {class: 'music', classroom:'303'},
        {class: ' ', classroom:' '},
        {class: 'PE', classroom:'gym'}
    ],
    [
        {class:'Math', classroom:'101'},
        {class: ' ', classroom:' '},
        {class: 'music', classroom:'303'},
        {class: ' ', classroom:' '},
        {class: 'PE', classroom:'gym'}
    ],
    [
        {class:' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '}
    ],
    [
        {class:' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '}
    ],
    [
        {class:' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '},
        {class: ' ', classroom:' '}
    ]
]
console.log(s[0][1].class);
function callAlert(){
    alert('eork')
}
const Timetable = () =>{
    return(
        <div id="timetable">
            <div className="table">
                <table >
                    <thead>
                        <tr>
                            {days.map((e, i)=>{return <th key={i}>{e}</th>})}
                        </tr>
                    </thead>
                   <tbody>
                       {s.map((e,i)=><tr key={i}>{e.map((e,k)=>{
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
export default Timetable;