import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {recom_add, profile_delete} from './reducers/profile_reducer'
import './css/Profile.css';

const Profiles = (props:any) => {
    const navigate = useNavigate();
    let datas = props.state.profile_reducer.profiles;
    let recom_datas = props.state.profile_reducer.recommend;
    const [searchInput, setSearchInput] = useState('')
    const searchOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        console.log(event.target.value);
    }
    const dispatch = useDispatch();
    const delete_data = (e:any) => {
        //alert(e.id);
        const data = {id:e.id};
        dispatch(profile_delete(data));
    }
    const add_profile = (e:any) => {
        alert(e.name);
        const data = {
            id: e.id,
            name: e.name,
            username: e.username
        }
        dispatch(recom_add(data));
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
                <div><p >{e.id}, {e.name}</p><Link to={url}>{e.username}</Link></div>
                <button onClick={()=>delete_data(e)}>delete</button>
                </div>})}  
            </section>
            <section id="recommend_profile">
                <h4>recommend friend</h4>
                {recom_datas.map((e:any, k:any)=>{
                    let url = '/profile' + e.username;
                    return <div key={k}>
                        <p>{e.name}</p>
                        <Link to={url}>{e.username}</Link>
                        <button onClick={()=>add_profile(e)} >add</button>
                    </div>
                })}
                
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