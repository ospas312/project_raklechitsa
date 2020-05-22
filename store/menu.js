export const state = () => ({
  openMenu: false,
});

export const mutations = {
  openMenu(state) {
    state.openMenu = !state.openMenu;
    console.log(state.openMenu);
  },
};
