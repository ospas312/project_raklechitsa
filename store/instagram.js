export const state = () => ({
  photos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  async fetchInstagramPhotos({ commit, getters }) {
    const getPosts = data => {
      return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
        const {
          node: { display_url, accessibility_caption, shortcode },
        } = post;
        return {
          display_url,
          accessibility_caption,
          url: `https://www.instagram.com/p/${shortcode}`,
        };
      });
    };
    const data = await this.$axios.$get(process.env.INST_API_URL);
    if (typeof data.graphql === 'object') {
      const formatData = getPosts(data);
      await commit('setState', {
        name: 'photos',
        value: formatData,
      });
    } else {
      await commit('setState', {
        name: 'photos',
        value: getters.getStockPhotos,
      });
    }
  },
};

export const getters = {
  getPhotos(state) {
    return state.photos.slice(0, 8);
  },
  getStockPhotos(state) {
    return state.photos_stock;
  },
};