export default {
  addresses(state) {
    return state.addresses;
  },
  hasAddresses(state) {
    return state.addresses && state.addresses.length > 0;
  }
};