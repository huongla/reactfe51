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
  total: 30,
};

const BTBurgerReducer = (state = burgerState, action) => {
  return { ...state };
};

export default BTBurgerReducer;
