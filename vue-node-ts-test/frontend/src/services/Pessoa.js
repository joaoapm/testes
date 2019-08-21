import Http from './Services';

export const getPessoa = () => Http.get('/pessoa');

export const login = ({ login, senha }) => Http.post('/pessoa/login', { login, senha });

