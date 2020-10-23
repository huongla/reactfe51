//state của game Buger
const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 20,
    cheese: 10,
    beef: 10,
  },
  total: 40,
};

const BTBurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_INSIDE": {
      //console.log(action);
      //let {propsBurger,amount} = action;
      if (action.amount === -1 && state.burger[action.propsBurger] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[action.propsBurger] += action.amount;
      state.burger = burgerUpdate;
      //Tính tổng tiền

      state.total += action.amount * state.menu[action.propsBurger];
      return { ...state };
    }
  }
  return { ...state };
};

export default BTBurgerReducer;
