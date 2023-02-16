const Class_save = 'save';
const Class_list = 'list';
const Class_delete = 'delete';

export const class_save = (data:any) =>({
    type: Class_save,
    data
});

export const class_list = (data:any) => ({
    type: Class_list,
    data
});

export const class_delete = (data:any) => ({
    type: Class_delete,
    data
});

const initialState = {
    classes: [
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
    ]
}

export default function class_reducer(state=initialState, action:any) {
    const classes = state.classes;
    switch(action.type){
        case Class_save:
            const data = action.data;
            const day = data.dateID;
            const t = data.period;
            const c = data.className;
            const r = data.classroom;
            classes[t][day].class = c;
            classes[t][day].classroom = r;
            return {...state};
        case Class_delete:
            const del_day = action.data.dateID;
            const del_t = action.data.period;
            classes[del_t][del_day].class = ' ';
            classes[del_t][del_day].classroom = ' ';
            return {...state};
        case Class_list:
            return {...state};
        default: 
            return state;
    }

}