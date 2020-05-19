<template>
  <div :class="['questionForm', questionFormClass]">
    <h3 class="questionForm__title">{{ currentQuestion.title }}</h3>
    <p class="questionForm__question">
      <span class="questionForm__question">{{ currentQuestion.question }}</span>
      <span
        v-if="currentQuestion.subQuestion"
        class="questionForm__question-detail"
        >{{ currentQuestion.subQuestion }}</span
      >
    </p>
    <InputTest
      placeholder="Напишите тут"
      :bottomBordered="true"
      class="questionForm__input"
      v-model="answer"
    ></InputTest>
    <div class="questionForm__buttons">
      <Button
        :disabled="this.$store.state.quiz.currentQuestion === 0"
        :buttonClass="buttonClass"
        :buttonType="buttonType"
        @btnClick="prevQuestion"
      >
        Назад
      </Button>
      <Button
        :buttonClass="buttonClass"
        :buttonType="buttonType"
        @btnClick="nextQuestion"
      >
        Далее
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import InputTest from '@/components/ui/InputTest';
export default {
  components: {
    Button,
    InputTest,
  },
  data() {
    return {
      buttonClass: 'questionForm__button',
      buttonType: 'button',
      answer: '',
    };
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    question: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
      console.log(this.$store.state);
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion];
    },
  },
  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/next_question', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer || '';
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/prev_question');
      this.answer = this.initialAnswer || '';
    },
  },
};
</script>

<style scoped>
.questionForm__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0;
  margin-bottom: 40px;
}
.questionForm__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
}
.questionForm__question-detail {
  color: #666;
}
.questionForm__input {
  border: none;
  width: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  border-bottom: 1px solid #e7e7e7;
  justify-self: center;
  align-self: center;
  padding-top: 80px;
}
.questionForm__buttons {
  display: flex;
  justify-content: flex-start;
  padding-top: 240px;
}
.questionForm__button {
  width: 226px;
  height: 52px;
  background-color: #613a93;
  cursor: pointer;
  border: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  margin-right: 30px;
}
</style>
