export default async function({ store }) {
  await store.dispatch('video/fetchVideos');
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('statisticsData/fetchStatistic');
}
