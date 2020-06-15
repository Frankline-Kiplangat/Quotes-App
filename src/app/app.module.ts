import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';

>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
<<<<<<< HEAD
    QuoteFormComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
