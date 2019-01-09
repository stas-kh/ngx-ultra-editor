import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SyntaxNode } from '../../shared/models/syntax-node.model';

@Injectable({
  providedIn: 'root'
})
export class StyleApplierService {
  private onApplyStyle: Subject<{ property: string, value: any }> = new Subject();
  private onSelectNode: Subject<SyntaxNode> = new Subject();

  constructor() {}

  public get onStyleApplied(): Observable<{ property: string, value: any }> {
    return this.onApplyStyle.asObservable();
  }

  public get onNodeSelected(): Observable<SyntaxNode> {
    return this.onSelectNode.asObservable();
  }

  public setStyle(property: string, value: any = null): void {
    this.onApplyStyle.next({ property, value });
  }

  public setNode(node: SyntaxNode): void {
    this.onSelectNode.next(node);
  }
}
