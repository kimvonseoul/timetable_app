import React from 'react';
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

const Timetable = () =>{
    return(
        <div id="timetable">
            <div className="table">
                <table >
                    <thead>
                        <tr>
                            {days.map((e, i)=><th key={i}>{e}</th>)}
                        </tr>
                    </thead>
                   <tbody>
                       {s.map((e,i)=><tr key={i}>{e.map((e,i)=><td key={i}><h4>{e.class}</h4><p>{e.classroom}</p></td>)}</tr>)}
                    
                   </tbody> 
                </table>
            </div>   
        </div>
    );
}
export default Timetable;