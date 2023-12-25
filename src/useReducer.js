export function reducer(state, action) {
  console.log(action, state);
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
        val: ff(state),
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const ff = (state) => {
  let pass = '';
  let str = '0123456789';
  if (state.spec_char) str += '[*(#$!@%^&)]';
  if (state.alphabets)
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  console.log('sa');

  for (let i = 1; i <= state.length; i++) {
    console.log('vd');
    let char = Math.floor(Math.random() * (str.length - 1) + 1);
    console.log(char);
    pass += str.charAt(char);
  }
  console.log('pass', pass);
  return pass;
};
