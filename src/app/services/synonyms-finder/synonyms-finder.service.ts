import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynonymsFinderService {
  private readonly apiEndpoint = `https://api.datamuse.com`;

  findSynonym(word: string): Promise<{ word: string, score: number }[]> {
    return fetch(`${this.apiEndpoint}/words?rel_syn=${word}`)
      .then(res => res.json());
  }
}
