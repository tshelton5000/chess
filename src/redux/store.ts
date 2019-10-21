import { any } from "prop-types";

interface Store<T, AnyAction> {
  dispatch: () => any,
  getState: any,
  subscribe: any,
  replaceReducer: any
  firstClick: any
}

const store: Store<string, () => {}> = {
  dispatch: () => {},
  getState: function(){return this.firstClick},
  subscribe: () => {},
  replaceReducer: '',
  firstClick: undefined
}



export default store;