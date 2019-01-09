import { Component, OnInit } from '@angular/core';

import { StyleApplierService } from '../../services/style-applier/style-applier.service';
import { SyntaxNode } from '../../shared/models/syntax-node.model';
import { SynonymsFinderService } from '../../services/synonyms-finder/synonyms-finder.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  public isNodeSelected = false;
  public isLoading = false;
  public synonyms: { word: string, score: number }[] = null;

  constructor(private styleApplier: StyleApplierService,
              private synonymsFinder: SynonymsFinderService) {
  }

  ngOnInit(): void {
    this.styleApplier.onNodeSelected
      .subscribe((node: SyntaxNode) => {
        this.isNodeSelected = !!node;

        this.isLoading = true;
        this.synonymsFinder.findSynonym(node.text)
          .then((synonyms) => {
            /*
            Provided API is extremely fast, so I decided to put some timeout
            just to show different states like loading etc.
             */
            setTimeout(() => {
              this.synonyms = synonyms;
              this.isLoading = false;
            }, 1000);
          });
      });
  }

  setStyle(property: string, value?: any) {
    this.styleApplier.setStyle(property, value);
  }
}
