import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { EditEquipeComponent } from './edit-equipe/edit-equipe.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [   EquipeComponent,
    ListEquipeComponent,
    EditEquipeComponent],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,

  ],
  exports:[EquipeComponent,
    ListEquipeComponent,
    EditEquipeComponent
  ]
})
export class EquipeModule { }
