export function reducer(state, action) {
  
  switch (action.type) {
    case 'length': {
      return {
        ...state,
        length: action.value,
      };
    }
    case 'spec_char': {
      return {
        ...state,
        spec_char: action.value,
      };
    }
    case 'alphabets': {
      return {
        ...state,
        alphabets: action.value,
      };
    }
    case 'gen_password': {
      return {
        ...state,
        val: password_gen(state),
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const password_gen = (state) => {
  let pass = '';
  let str = '0123456789';
  if (state.spec_char) str += '[*(#$!@%^&)]';
  if (state.alphabets)
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 1; i <= state.length; i++) {

    let char = Math.floor(Math.random() * (str.length - 1) + 1);

    pass += str.charAt(char);
  }

  return pass;
};
