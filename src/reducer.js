export const initialState = {
  basket: [],
  user: null,
};

export const basketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const getItemQuantity = (basket, id) =>
  basket.filter((item) => item.id === id).length;

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };

    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        window.alert(`Cant remove product (id:${action.id})`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
}

export default basketReducer;
