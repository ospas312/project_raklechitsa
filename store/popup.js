export const state = () => ({
  opened: false,
  contactsOpened: false,
});

export const mutations = {
  open(state) {
    console.log('1');
    state.opened = true;
  },
  close(state) {
    state.opened = false;
    state.contactsOpened = false;
  },
  openContacts(state) {
    state.contactsOpened = true;
  },
};
export const getters = {
  getPopUpOpened(state) {
    return state.contactsOpened;
  },
};
