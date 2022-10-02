import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// export default ()=>{
//     platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.error(err));
// }




const ngVersion = require('../package.json').dependencies['@angular/core']; // better just take the major version 

window.plattform = window.plattform || {};
let platform = window.plattform[ngVersion];
if (!platform) {
  console.log("Angular MFE 1111 --> platform not find")
  platform = platformBrowserDynamic();
  window.plattform[ngVersion] = platform; 
}
else{
    console.log("----------------> fincd in 11111",platform)
}

export default ()=>{
    platform.bootstrapModule(AppModule).then(()=>{console.log(" inside mfe 1 function")})
      .catch(err => console.error(err));
}
