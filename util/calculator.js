export const initialState = {
  currentValue: '0',
  answer: '',
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return {
      currentValue: `${value}`,
    };
  }
  return {
    currentValue: `${state.currentValue}`.concat(`${value}`),
  };
};
export const handleOperator = (value, state) => {
  if (state.answer !== '') {
    return {
      currentValue: `${state.answer}`.concat(`${value}`),
    };
  }
  if (state.currentValue !== '0') {
    return {
      currentValue: `${state.currentValue}`.concat(`${value}`),
    };
  }
};
export const handleEqual = (state) => {
  const { currentValue } = state;

  const ans = eval(currentValue);
  if (currentValue !== '0') {
    return {
      currentValue: currentValue,
      answer: ans,
    };
  }
  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'operator':
      return handleOperator(value, state);
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
