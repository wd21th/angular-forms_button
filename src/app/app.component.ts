import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | "pin_code";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'pin_code';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showPincodeEditor() {
    return this.editor === 'pin_code';
  }

  

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/