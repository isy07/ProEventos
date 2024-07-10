// import { Injectable } from '@angular/core';
// import { CanActivate, Router} from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(
//     private router: Router,
//     private toaster: ToastrService
//   ){}

//   canActivate(): boolean {
//     if(localStorage.getItem('user') !== null)
//       return true;

//     this.toaster.info('Usuário não autenticado!')
//     this.router.navigate(['/user/login'])
//     return false;
//   }

// }

// import { inject, Injectable } from '@angular/core';
// import { CanActivate, Router} from '@angular/router';
// import { ToastrService } from 'ngx-toastr';


// export const authGuard: CanActivateFn  = (route, state) => {
//   const router = inject(Router);
//   const toaster = inject(ToastrService);

//   if(localStorage.getItem('user') !== null){
//     return true;

//   } else {
//     toaster.info('Usuário não autenticado!');
//     router.navigate(['/user/login']);
//     return false;
//   }

// }


//a primeira forma comentada é a forma que o professor faz, mas não funciona
//a segunda forma comentada é a forma como um colega fez, porém é pra versão posterior do angular, e para mim tbm nao funcionou.
// forma que peguei no chat
;
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user') !== null) {
      return true;
    } else {
      this.toastr.info('Usuário não autenticado!');
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}

