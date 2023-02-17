import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import './css/Profile.css';
const Profiles = (props:any) => {
    let datas = props.state.profile_reducer.profiles;
    const [searchInput, setSearchInput] = useState('')
    const searchOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        console.log(event.target.value);
    }
    return(
        <div id="profiles">
            <form id='search_form'>
                <input 
                    id='search' 
                    type="text" 
                    placeholder='search a profile' 
                    value={searchInput}
                    onChange={searchOnchange}/>
                <button id='search_btn'>search</button>
            </form>
            
            <section id="profile_list">{datas.map((e:any, k:any)=>{
                let url = '/profile?' + e.username;
                return<div id="prof" key={e.id}>
                <p >{e.id}, {e.name}</p><Link to={url}>{e.username}</Link></div>})}  
            </section>
            <section id="recommend_profile">
                <h4>recommend friend</h4>
                <p>Jason</p>
                <button>add</button>
            </section>
        </div>
    );
}
function mapStateToProps(state: any) {
    return {
        state: state
    };
  }

export default connect(mapStateToProps)(Profiles);