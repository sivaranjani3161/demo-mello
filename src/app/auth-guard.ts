import { CanActivateFn,Router} from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = () => {
  
  const router=inject(Router);

  const phone=localStorage.getItem('phone');

  if(phone){
    return true;
  }
  else{
   return  router.navigate(['/login'])
  }



};
