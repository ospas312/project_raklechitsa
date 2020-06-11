export default async function({ store }) {
  await store.dispatch('video/fetchVideos');
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('instagram/GET_PHOTOS');
}
