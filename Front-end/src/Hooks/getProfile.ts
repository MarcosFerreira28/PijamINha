import { api } from '../interceptator/interceptor';

export const getUserProfile = async () => {
  try {
    const response = await api.get('/me');
    return response.data.user;
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error);
    throw error;
  }
};