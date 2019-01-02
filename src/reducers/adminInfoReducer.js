export default (state = {}, action) => {
  let newState;
  let newAddress;
  const { streetAddress, city, addressState, zipcode, lat, lng, addressList } = action;
  switch(action.type) {
    case 'RECEIVE_ADDRESS':
      newState = Object.assign({}, state);
      newState[action.address.id] = action.address;
      return newState;
    case 'DELETE_ADDRESS':
      newState = Object.assign({}, addressList);
      return newState;
    default:
      return state;
  }
}
