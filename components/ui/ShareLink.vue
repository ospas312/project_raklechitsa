<template>
  <div class="share-link">
    <h3 class="share-link__title">Поделитесь</h3>
    <div class="share-link__icon">
      <nav>
        <ul class="share-link__icon-list">
          <li class="share-link__icon-link">
            <a
              class="share-link__icon-facebook"
              target="_blank"
              href="facebookUrl"
              title="Facebook"
              ><Facebook
            /></a>
          </li>
          <li class="share-link__icon-link">
            <a
              class="ya-share2__icon-twitter"
              target="_blank"
              href="twitter"
              rel="nofollow noopener"
              title="Twitter"
              ><Twitter
            /></a>
          </li>
          <li class="share-link__icon-link">
            <a
              class="ya-share2__icon-vk"
              target="_blank"
              href="vkUrl"
              title="ВКонтакте"
              ><Vk
            /></a>
          </li>
          <li class="share-link__icon-link">
            <a
              class="ya-share2__icon-ok"
              target="_blank"
              href="odnoklassniki"
              title="Одноклассники"
              ><Ok
            /></a>
          </li>
          <li class="share-link__icon-link">
            <a
              class="share-link__icon-instagram"
              target="_blank"
              href="instagramUrl"
              title="Instagram"
              ><Instagram
            /></a>
          </li>
          <li class="share-link__icon-link">
            <a
              class="share-link__icon-youtube"
              target="_blank"
              href="youtubeUrl"
              title="Youtube"
              ><Youtube
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Youtube from '@/components/svg/Youtube';
import Instagram from '@/components/svg/Instagram';
import Twitter from '@/components/svg/Twitter';
import Facebook from '@/components/svg/Facebook';
import Vk from '@/components/svg/Vk';
import Ok from '@/components/svg/Ok';
export default {
  components: {
    Youtube,
    Instagram,
    Ok,
    Vk,
    Twitter,
    Facebook,
  },
  data() {
    return {
      instagramUrl: 'https://www.instagram.com/raklechitsa/',
      youtubeUrl:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
      facebookUrl: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      vkUrl: `https://vk.com/share.php?url=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      odnoklassniki: `https://connect.ok.ru/offer?url=${encodeURI(
        window.location.href
      )}&amp;title=${document.querySelector('title').innerText}`,
      twitter: `https://twitter.com/intent/tweet?text=${
        document.querySelector('title').innerText
      }&url=${encodeURI(window.location.href)}`,
    };
  },
};
</script>

<style scoped>
.share-link__icon-list {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.share-link__icon-link {
  padding-right: 20px;
}
.share-link__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin: 0;
  margin-bottom: 100px;
}
@media screen and (max-width: 320px) {
  .share-link__icon-link {
    padding-right: 15px;
  }
  .share-link__icon-link:last-child {
    padding-right: 0px;
  }
  .share-link__title {
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
