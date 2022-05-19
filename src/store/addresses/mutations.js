export default {
  registerAddress(state, payload) {
    state.addresses.push(payload);
  },
  setAddresses(state, payload) {
    state.addresses = payload;
  }
};