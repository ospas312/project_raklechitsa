export const state = () => ({
  opened: false,
  openFormSocial: false,
  openFormQuestion: false,
});

export const mutations = {
  open(state) {
    state.opened = true;
    state.openFormSocial = false;
    state.openFormQuestion = true;
  },
  close(state) {
    state.opened = false;
  },
  openContact(state) {
    state.opened = true;
    state.openFormSocial = true;
    state.openFormQuestion = false;
  },
};
/*export const getters = {
  getPopUpOpened(state) {
    return state.opened;
  }
}*/
