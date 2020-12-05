import * as Yup from 'yup';

function validatePass(value) {
  const { pass } = this.parent;
  return pass === value;
}

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Não se esqueça do seu nome')
    .min(2, 'Vamos lá, eu sei que seu nome é um pouquinho maior'),
  pass: Yup.string()
    .required('Por favor, digite sua senha')
    .min(6, 'Sua senha deve possuir 6 digítos'),
  passConfirm: Yup.string().test(
    'pass-match',
    'Oh, oh, parece que suas senhas não batem',
    validatePass
  ),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, digite seu e-mail'),
  address: Yup.string()
    .required('Por favor, digite seu endereço'),
});

export default schema;
