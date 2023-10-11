
import { createStore } from "redux";
// Імпортуємо функцію композиції редюсерів
import { combineReducers } from "redux";
import { phoneBookReducer } from "./phoneBookReducer";
import { devToolsEnhancer } from "@redux-devtools/extension"
// Код редюсерів tasksReducer та filtersReducer

export const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.



const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

