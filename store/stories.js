import axios from 'axios';

export const state = () => ({
  stories: [
    {
      id: '1',
      storyImageSrcData: '/story__image_1.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: '2',
      storyImageSrcData: '/story__image_2.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Позднер',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '3',
      storyImageSrcData: '/story__image_3.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Александр Тарханов',
      storyQuoteData:
        'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: '4',
      storyImageSrcData: '/story__image_4.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '5',
      storyImageSrcData: '/story__image_1.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '6',
      storyImageSrcData: '/story__image_2.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Позднер',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '7',
      storyImageSrcData: '/story__image_3.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Александр Тарханов',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '8',
      storyImageSrcData: '/story__image_4.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '9',
      storyImageSrcData: '/story__image_1.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
    },
    {
      id: '10',
      storyImageSrcData: '/story__image_2.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Позднер',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '11',
      storyImageSrcData: '/story__image_3.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Александр Тарханов',
      storyQuoteData:
        'Я не могу победить свою пунктуальность в отличии от рака.',
    },
    {
      id: '12',
      storyImageSrcData: '/story__image_4.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '13',
      storyImageSrcData: '/story__image_1.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '14',
      storyImageSrcData: '/story__image_2.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Позднер',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '15',
      storyImageSrcData: '/story__image_3.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Александр Тарханов',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
    {
      id: '16',
      storyImageSrcData: '/story__image_4.jpg',
      storyImageAltData: 'Альт текст',
      storyTitleData: 'Владимир Тен',
      storyQuoteData: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
    },
  ],
  currentStory: {},
});

//setters pseudo section

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

// getter pseudo section
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getStoryById(state, id) {
    console.log(state.stories[id]);
    return state.stories[id];
  },
};

/* код палтуха по фетчу json c внешнего ресурса*/
/*
export const actions = {
  fetchLessons(state) {
    return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
      return state.commit('setState', {
        name: 'lessons',
        value: response.data,
      });
    });
  },
  fetchLessonWithId(state, payload) {
    return axios
      .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentLesson',
          value: response.data,
        });
      });
  },
};
*/
