import { Component, OnInit } from '@angular/core';

import { TextReceiverService } from '../../services/text-receiver/text-receiver.service';
import { SyntaxNode } from '../../shared/models/syntax-node.model';
import { StyleApplierService } from '../../services/style-applier/style-applier.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public content: SyntaxNode[];

  private editableNode: SyntaxNode;

  constructor(private textReceiver: TextReceiverService,
              private styleApplier: StyleApplierService) {
  }

  ngOnInit() {
    this.textReceiver.getMockText()
      .then((result) => this.content = this.constructSentenceTree(result));

    this.styleApplier.onStyleApplied
      .subscribe(({ property, value }) => {
        if (!this.editableNode || !property || this.editableNode[property] === undefined) {
          return;
        }

        if (!value) {
          // if no value provided we just toggle value
          this.editableNode[property] = !this.editableNode[property];
        } else {
          // if value is provided we just set this value
          this.editableNode[property] = value;
        }
      });
  }

  public get editorContent(): SyntaxNode[] {
    return this.content ? Object.values(this.content) : [];
  }

  public getNodeStyles(node: SyntaxNode): {} {
    return {
      'bold': node.isBold,
      'italic': node.isItalic,
      'underlined': node.isUnderlined
    };
  }

  public setNodeToEdit(node: SyntaxNode): void {
    this.editableNode = node;
    this.styleApplier.setNode(node);
  }

  private constructSentenceTree(content: string): SyntaxNode[] {
   return content
     .split(' ')
     .map((word: string) => new SyntaxNode(word));
  }
}
