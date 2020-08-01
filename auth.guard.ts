import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { from } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  base_url: string;
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Verifica se existe Token
    if (this.authService.isAuthenticated()) {
      // Caso exista token retorna true
      return true;
    }
    // Caso não exista envia para página de cpf não é cadastrado
    this.router.navigate(['/acesso-negado']);
    return false;
  }
}
