// libraries and 3rd party
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// root
import { AppComponent } from './app.component';

// components
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { EditorComponent } from './components/editor/editor.component';

// services
import { TextReceiverService } from './services/text-receiver/text-receiver.service';
import { StyleApplierService } from './services/style-applier/style-applier.service';
import { SynonymsFinderService } from './services/synonyms-finder/synonyms-finder.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ControlPanelComponent,
    HeaderComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TextReceiverService, StyleApplierService, SynonymsFinderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
