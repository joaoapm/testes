import Http from './Services';

export const getPessoa = () => Http.get('/usuario');

export const login = ({ login, senha }) => Http.post('/usuario/login', { login, senha });

