import { AuthService } from '../app/services/auth.service'

export function authAppInitializerFactory(authService: AuthService): () => Promise<void> {
  return () => authService.runInitialLoginSequence();
}