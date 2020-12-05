import * as Yup from 'yup';

const schema = Yup.object().shape({
  pass: Yup.string()
    .required('Por favor, digite sua senha')
    .min(6, 'Sua senha deve possuir 6 digítos'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, digite seu e-mail'),
});

export default schema;
