import { createStore } from 'redux';

// Define the initial state of your store
const initialState = {
  s: [
    [
      { class: ' ', classroom: ' ' },
      { class: 'math', classroom: '405' },
      { class: 'music', classroom: '303' },
      { class: ' ', classroom: ' ' },
      { class: 'PE', classroom: 'gym' }
    ],
    [
      { class: 'Math', classroom: '101' },
      { class: ' ', classroom: ' ' },
      { class: 'music', classroom: '303' },
      { class: ' ', classroom: ' ' },
      { class: 'PE', classroom: 'gym' }
    ],
    [
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' }
    ],
    [
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' }
    ],
    [
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' },
      { class: ' ', classroom: ' ' }
    ]
  ]
};

// Define your reducer
const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'UPDATE_S':
      return {
        ...state,
        s: action.payload
      };
    default:
      return state;
  }
};

// Create your store
const store = createStore(reducer);

export default store;
