#ionic-meumobi-util
The purpose of this package is help to share generic modules between ionic apps. In order improve efficiency and quality. Reducing dependencies, allowing developers to code just the necessary in each app.

##Setup Library
```bash 
$ npm install --save ionic-meumobi-utils
```

##FilesProvider
This provides a service to manipulate files on ionic apps (mobile and web).
###Native (iOS/Android)
- Download/abort multiple files at same time; 
- Access/delete files on device app storage;

###Native/Web
- If a file is not able to download it allows to open the url (Ex: InAppBrowser for example);
In order to see a working demo check [here.](https://github.com/meumobi/Demo-ionic-meumobi)

###Import Modules
```typescript
import { FilesProvider } from 'ionic-meumobi-utils';

@NgModule({
  declarations: [...],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    FilesProvider
  ]
})
export class AppModule {}
```








