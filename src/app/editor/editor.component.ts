import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
editor: any;
  constructor() { }

  ngOnInit(): void {
    this.editor= new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: 'editorjs'
    });
  }
  save(){
    this.editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }

}
