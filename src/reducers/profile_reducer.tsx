const Prof_add= 'add'
const Prof_list = 'list'
const Prof_delete = 'delete'

export const profile_add = (data:any) => ({
    type: Prof_add,
    data
});

export const profile_list = (data:any) => ({
    type: Prof_list,
    data
});

export const Profile_delete = (data:any) => ({
    type: Prof_delete,
    data
});

const initialState = {
    endId: 1,
    profiles: [
        {id:0, name:'kim', username:'kimvonseoul'},
        {id:1, name:'sophia', username:'sophia'},

    ]
}

export default function profile_reducer(state=initialState, action:any){
    const profiles = state.profiles;
    switch(action.type){
        case Prof_add:
            const data = action.data;
            state.endId++;
            const id = state.endId;
            const name = data.id;
            const username = data.username;
            const newData = {id:id, name:name, username: username}
            profiles.concat(newData);
            return{...state}
        default:
            return state;
    }
}
