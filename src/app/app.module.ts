import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from '.angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteComponent,
    HighlightDirective,
    DetailsComponent,
    DateCountPipe,
    QuotesFormComponent,
    QuotesDetailsComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
