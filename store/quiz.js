export const questions = [
  {
    id: 1,
    title: 'Шаг 1 из 12',
    question: 'Как вас зовут?',
  },
  {
    id: 2,
    title: 'Шаг 2 из 12',
    question: 'Было ли у вас онкологическое заболевание?',
    subQuestion:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
  },
  {
    id: 3,
    title: 'Шаг 3 из 12',
    question: 'Какие занятия приносят Вам наибольшее удовольствие?',
    subQuestion:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },
  {
    id: 4,
    title: 'Шаг 4 из 12',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
  },
  {
    id: 5,
    title: 'Шаг 5 из 12',
    question: 'Какие сильные увлечения у Вас есть?',
    subQuestion:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  },
  {
    id: 6,
    title: 'Шаг 6 из 12',
    question:
      'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
  },
  {
    id: 7,
    title: 'Шаг 7 из 12',
    question:
      'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
    subQuestion: 'Кроме необходимых, таких, как чистка зубов.',
  },
  {
    id: 8,
    title: 'Шаг 8 из 12',
    question:
      'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
  },
  {
    id: 9,
    title: 'Шаг 9 из 12',
    question: 'Что Вас успокаивает/умиротворяет лучше всего?',
  },
  {
    id: 10,
    title: 'Шаг 10 из 12',
    question:
      'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
  },
  {
    id: 11,
    title: 'Шаг 11 из 12',
    question: 'Как вы обычно проводите выходные?',
  },
  {
    id: 12,
    title: 'Шаг 12 из 12',
    question: 'Почта или телефон для связи.',
    subQuestion:
      'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
  },
  {
    id: 13,
    title: 'Спасибо что приняли участие!',
    question: '',
  },
];
export const state = () => ({
  currentQuestion: 0,
  answers: {},
  questions: questions,
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
  setQuestion(state, questions) {
    state.questions = questions;
  },
};

export const actions = {
  async next_question({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },

  async prev_question({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 0) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },
};
