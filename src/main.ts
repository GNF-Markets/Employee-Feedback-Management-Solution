import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { DemoAngularMaterialModule } from './app/DemoAngularMaterialModule';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig, // ✅ Add this here!
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(DemoAngularMaterialModule),
  ],
})
  .catch((err) => console.error(err));
