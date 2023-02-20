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
        {id:0, name:'kim', username:'kimvonseoul', classes: [
            [
                {id:1, class:'math', classroom: '410'},
                {id:2, class:'', classroom: ''},
                {id:3, class:'music', classroom: '520'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'PE', classroom: 'Gym'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'English', classroom: '220'},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'Math', classroom: '310'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'Art', classroom: '350'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ]
        ]},
        {id:1, name:'sophia', username:'sophia', classes: [
            [
                {id:1, class:'math', classroom: '410'},
                {id:2, class:'Enlgish', classroom: '120'},
                {id:3, class:'music', classroom: '520'},
                {id:4, class:'English', classroom: '240'},
                {id:5, class:'PE', classroom: 'Gym'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'English', classroom: '220'},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'Math', classroom: '310'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'Art', classroom: '350'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ]
        ]},
        {id:3, name:'Jason', username:'jason_', classes: [
            [
                {id:1, class:'math', classroom: '410'},
                {id:2, class:'Enlgish', classroom: '120'},
                {id:3, class:'music', classroom: '520'},
                {id:4, class:'English', classroom: '240'},
                {id:5, class:'PE', classroom: 'Gym'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'English', classroom: '220'},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'Math', classroom: '310'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'Art', classroom: '350'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ]
        ]},
        {id:4, name:'cat', username:'cat_', classes: [
            [
                {id:1, class:'math', classroom: '410'},
                {id:2, class:'Enlgish', classroom: '120'},
                {id:3, class:'music', classroom: '520'},
                {id:4, class:'English', classroom: '240'},
                {id:5, class:'PE', classroom: 'Gym'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'English', classroom: '220'},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'Math', classroom: '310'}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'Art', classroom: '350'},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ],
            [
                {id:1, class:'', classroom: ''},
                {id:2, class:'', classroom: ''},
                {id:3, class:'', classroom: ''},
                {id:4, class:'', classroom: ''},
                {id:5, class:'', classroom: ''}
            ]
        ]},

    ],
    followings: [
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
    const followings = state.followings;
    const id = state.endId;
    switch(action.type){
        case Prof_delete:
            const newList = followings.filter(profile => profile.id !== action.data.id);
            state.followings = newList;
            return state
        case Prof_list:
            return state;
        case Recom_add:
            state.endId++;
            const recomAddedData = state.followings.concat({id:state.endId, name:action.data.name, username:action.data.username});
            state.followings = recomAddedData;
            const newRecom = state.recommend.filter(e => e.id !== action.data.id);
            state.recommend = newRecom;
            return {...state};
        default:
            return state;
    }
}
