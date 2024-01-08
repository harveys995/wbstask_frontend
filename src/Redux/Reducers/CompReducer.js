import { combineReducers } from 'redux';
import day1 from "../../JSONData/2023-06-19.json"

export const initialState = {};

function jsonData(state = day1, action) {
  switch (action.type) {
    case 'jsonData_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

function compData(state = day1["scores"], action) {
  switch (action.type) {
    case 'compData_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

function topTenData(state = day1["scores"].slice(0, 10), action) {
  switch (action.type) {
    case 'topTen_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

function dayData(state = "day1", action) {
  switch (action.type) {
    case 'day_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

function compName(state = "scores", action) {
  switch (action.type) {
    case 'compName_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

function sorting(state = "Descending", action) {
  switch (action.type) {
    case 'sorting_UPDATED':
      return action.payload;
    default:
      return state;
  }
}

const compReducers = combineReducers({
  jsonData,
  compData,
  topTenData,
  dayData,
  compName,
  sorting
});

export default compReducers;