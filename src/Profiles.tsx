import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {recom_add, profile_delete} from './reducers/profile_reducer'
import './css/Profile.css';

const Profiles = (props:any) => {
    let follow_datas = props.state.profile_reducer.followings;
    let recom_datas = props.state.profile_reducer.recommend;
    let prof_datas = props.state.profile_reducer.profiles;
    const [searchInput, setSearchInput] = useState('');
    const [searchedProfiles, setSearchedProfiles] = useState<any>([]);
    const searchOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        console.log(event.target.value);
        for (var item of prof_datas){
            var lists = []
            if(item.username.indexOf(event.target.value) > 0){
                console.log(item.username);
                let data = {name:item.name, username:item.username}
                lists.push(data);
            }
            console.log(lists);
            setSearchedProfiles(lists);
            console.log(searchedProfiles);
        }
    }
    console.log(searchedProfiles);
    const dispatch = useDispatch();
    const delete_data = (e:any) => {
        const data = {id:e.id};
        dispatch(profile_delete(data));
    }
    const add_profile = (e:any) => {
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
                    type="search" 
                    placeholder='search a profile' 
                    value={searchInput}
                    onChange={searchOnchange}/>
                <button id='search_btn'>search</button>
            </form>
            <section id="profile_list">
                <h4>Following</h4>
                {follow_datas.map((e:any, k:any)=>{
                let url = '/profile?username=' + e.username + '&name=' + e.name;
                return<div id="prof" key={e.id}>
                <p>{e.name}</p>
                <Link to={url}>@{e.username}</Link>
                <button className='unfollow_btn' onClick={()=>delete_data(e)}>unfollow</button>
                </div>})} 
            </section>
            <section id="recommend_profile">
                <h4>recommend friend</h4>
                {recom_datas.map((e:any, k:any)=>{
                    let url = '/profile?username=' + e.username + '&name=' + e.name;
                    return <div key={k}>
                        <p>{e.name}</p>
                        <Link to={url}>@{e.username}</Link>
                        <button className='profile_add_btn' onClick={()=>add_profile(e)} >follow</button>
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