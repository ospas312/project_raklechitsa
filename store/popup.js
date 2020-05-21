export const state = () => ({
  opened: false,
});

export const mutations = {
  open(state) {
    state.opened = true;
  },
  close(state) {
    state.opened = false;
  },
};
/*export const getters = {
  getPopUpOpened(state) {
    return state.opened;
  }
}*/
