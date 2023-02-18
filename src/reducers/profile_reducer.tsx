const Prof_add= 'add'
const Prof_list = 'list'
const Prof_delete = 'delete'
const Recom_add = 'recom_add'

export const profile_add = (data:any) => ({
    type: Prof_add,
    data
});

export const profile_list = (data:any) => ({
    type: Prof_list,
    data
});

export const profile_delete = (data:any) => ({
    type: Prof_delete,
    data
});

export const recom_add = (data:any) => ({
    type: Recom_add,
    data
})

const initialState = {
    endId: 1,
    profiles: [
        {id:0, name:'kim', username:'kimvonseoul'},
        {id:1, name:'sophia', username:'sophia'},

    ],
    recommend: [
        {id:0, name:'Jason', username:'jason_'},
        {id:1, name:'cat', username:'cat_'},
        
    ]
}

export default function profile_reducer(state=initialState, action:any){
    const profiles = state.profiles;
    const id = state.endId;
    switch(action.type){
        case Prof_add:
            const data = action.data;
            state.endId++;
            const name = data.id;
            const username = data.username;
            const newData = {id:id, name:name, username: username}
            profiles.concat(newData);
            return {...state}
        case Prof_delete:
            const newProfiles = profiles.filter(profile => profile.id !== action.data.id);
            state.profiles = newProfiles;
            return state
        case Prof_list:
            return state;
        case Recom_add:
            state.endId++;
            const recomAddedData = state.profiles.concat({id:state.endId, name:action.data.name, username:action.data.username});
            state.profiles = recomAddedData;
            const newRecom = state.recommend.filter(e => e.id !== action.data.id);
            state.recommend = newRecom;
            return {...state};
        default:
            return state;
    }
}
