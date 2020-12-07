import { ADD_REMINDER, EDIT_REMINDER, RESET, DELETE_ALL_REMINDERS } from '../actions/types';
import { EMPTY_REMINDER } from '../constants';

const INITIAL_STATE: any = {
  reminders: [{
    city: "Riverside",
    color: "red",
    day: "1",
    reminder: "Test Reminder",
    time: "11:00"
  }],
  selected: EMPTY_REMINDER,
  editMode: false,
  index: null
};

export default function (state: any = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_REMINDER:
      const { reminder } = action.payload;
      const reminders = [...state.reminders];

      if (state.editMode) {
        reminders[state.index] = reminder;
      } else {
        reminders.push(reminder);
      }

      return { ...state, reminders };
    case EDIT_REMINDER:
      const { selected } = action.payload;
      return { ...state, selected, editMode: true, index: action.payload.index };
    case RESET:
      return { ...state, selected: EMPTY_REMINDER, index: null, editMode: false };
    case DELETE_ALL_REMINDERS:
      return { ...state, reminders: [] };
    default:
      return state;
  }
}