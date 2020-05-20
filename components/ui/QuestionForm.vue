<template>
  <div :class="['question-form', questionFormClass]">
    <div>
      <h3 class="question-form__title">{{ currentQuestion.title }}</h3>
      <p class="question-form__question">
        <span class="question-form__question">{{
          currentQuestion.question
        }}</span>
        <span
          v-if="currentQuestion.subQuestion"
          class="question-form__question-detail"
          >{{ currentQuestion.subQuestion }}</span
        >
      </p>
    </div>
    <InputTest
      placeholder="Напишите тут"
      :bottomBordered="true"
      :class="[
        'question-form__input',
        { 'question-form_none': isLastForm == true },
      ]"
      v-model="answer"
    ></InputTest>
    <div class="question-form__buttons">
      <Button
        :disabled="this.$store.state.quiz.currentQuestion === 0"
        :buttonClass="[
          buttonClass,
          { 'question-form_none': isLastForm == true },
        ]"
        :buttonType="buttonType"
        @btnClick="prevQuestion"
      >
        {{ 'Назад' }}
      </Button>
      <Button
        :buttonClass="buttonClass"
        :buttonType="buttonType"
        @btnClick="nextQuestion"
      >
        {{ isLastForm ? 'Закрыть' : isLastQuestion ? 'Далее' : 'Отправить' }}
      </Button>
      <PolicyLink :class="[{ 'question-form_none': isLastQuestion == true }]" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import InputTest from '@/components/ui/InputTest';
import PolicyLink from '@/components/ui/PolicyLink';
export default {
  components: {
    Button,
    InputTest,
    PolicyLink,
  },
  data() {
    return {
      buttonClass: 'question-form__button',
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
    isLastQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      const questionsLength = questions.length;
      if (questionsLength != currentQuestion + 2) {
        return true;
      }
      return false;
    },
    isLastForm() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      const questionsLength = questions.length;
      if (questionsLength != currentQuestion + 1) {
        return false;
      }
      return true;
    },
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
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
.question-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.question-form_none {
  display: none;
}
.question-form__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  margin: 0;
  margin-bottom: 40px;
}
.question-form__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin: 0;
}
.question-form__question-detail {
  color: #666;
}
.question-form__input {
  border: none;
  width: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #666;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
}
.question-form__buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.question-form__button {
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
.question-form__button:first-child {
  background: none;
  color: #c0c0c0;
  width: auto;
}
@media screen and (max-width: 1280px) {
  .question-form__button {
    width: 200px;
    height: 48px;
    font-size: 16px;
    line-height: 19px;
  }
  .question-form__input {
    font-size: 16px;
    line-height: 22px;
  }
  .question-form__title {
    font-size: 28px;
    line-height: 32px;
  }
  .question-form__question {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 1024px) {
  .question-form__button {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
  .question-form__input {
    font-size: 15px;
    line-height: 22px;
  }
  .question-form__title {
    font-size: 26px;
    line-height: 30px;
  }
  .question-form__question {
    font-size: 15px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .question-form__button {
    width: 200px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
  .question-form__input {
    font-size: 15px;
    line-height: 19px;
  }
  .question-form__title {
    font-size: 26px;
    line-height: 30px;
  }
  .question-form__question {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 320px) {
  .question-form__button {
    width: 204px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
    margin-right: 0;
    padding: 0;
  }
  .question-form__button:first-child {
    margin-right: 15px;
  }
  .question-form__buttons {
    flex-wrap: wrap;
  }
  .question-form__input {
    font-size: 13px;
    line-height: 16px;
  }
  .question-form__title {
    font-size: 18px;
    line-height: 21px;
  }
  .question-form__question {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
