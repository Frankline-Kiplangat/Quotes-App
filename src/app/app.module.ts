import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    QuoteComponent,
    StrikethroughDirective,
    DateCountPipe,
    FormComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule
  ]
})

export class AppModule {
  
}
