import { Component, OnInit } from '@angular/core';

import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  selectedCollection = 'Choose Collection';
  collections = [];

  constructor(private colService: CollectionsService) { }

  ngOnInit() {
    this.collections = this.colService.getCollections();
  }

  onCollectionSelect(collection) {
    console.log(collection);
    this.selectedCollection = collection;
  }

}
