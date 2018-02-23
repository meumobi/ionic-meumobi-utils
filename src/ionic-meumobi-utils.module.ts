import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FilesProvider } from './providers/files';
@NgModule({
  declarations: [    
  ],
  exports: [    
  ]
})
export class IonicMeumobiUtils {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicMeumobiUtils,
      providers: [ FilesProvider ],
    };
  }
}

