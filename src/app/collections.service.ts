import { Injectable } from '@angular/core';

@Injectable()
export class CollectionsService {
  collections = [
    'Artifacts',
    'Environment',
    'Targets',
    'AdminConfigs'
  ]

  constructor() { }

  getCollections() {
    return this.collections.slice();
  }

}
