import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDataModule } from '@bb/core-data';
import { StoreModule } from '@ngrx/store';
import { ProjectsEffects } from './projects-ngrx/projects.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';
import { reducers } from './index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProjectsEffects
    ]),
    StoreDevtoolsModule.instrument({name: 'NGRX Sample Store'})
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
