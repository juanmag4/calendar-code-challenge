import { ADD_REMINDER, EDIT_REMINDER, RESET, DELETE_ALL_REMINDERS, DELETE_REMINDER } from '../actions/types';
import { EMPTY_REMINDER } from '../constants';

const INITIAL_STATE: any = {
  reminders: [{
    id: 0,
    city: "Riverside",
    color: "red",
    day: "1",
    reminder: "Test Reminder",
    time: "11:00"
  }],
  selected: EMPTY_REMINDER,
  editMode: false,
  index: null,
  idCount: 1
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

      return { ...state, reminders, idCount: state.idCount + 1 };
    case EDIT_REMINDER:
      const { selected } = action.payload;
      return { ...state, selected, editMode: true, index: action.payload.index };
    case RESET:
      return { ...state, selected: EMPTY_REMINDER, index: null, editMode: false };
    case DELETE_ALL_REMINDERS:
      return { ...state, reminders: [] };
    case DELETE_REMINDER:
      const newReminders = [...state.reminders];
      const reminderIndex = newReminders.findIndex(({ id }: any) => id == action.payload);
      newReminders.splice(reminderIndex, 1);
      return { ...state, reminders: newReminders };
    default:
      return state;
  }
}