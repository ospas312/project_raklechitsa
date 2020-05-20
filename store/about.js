export const state = () => ({
  enabled: true,
  text: {
    rakLechitsaText: `Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.`,

    khabenskyText: `Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга.
                    Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, 
                    оплачивая обследования, лечение и медицинские препараты, 
                    но и в целом меняет систему оказания помощи детям с опухолями мозга в России.`,
  },
});

export const mutations = {
  toggleTextState(state) {
    return (state.enabled = !state.enabled);
  },
};

export const getters = {
  getText(state) {
    if (state.enabled === true) {
      return state.text.rakLechitsaText;
    }
    if (state.enabled === false) {
      return state.text.khabenskyText;
    }
  },
  getTextState(state) {
    return state.enabled;
  },
};