import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare const Autodesk;

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {

  public viewer;
  public options;
  public url = 'MODEL-YOUR-URL-HERE';

  @ViewChild('viewer')
  public viewerContainer: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      env: 'Local',
      useADP: false,
      language: 'en',
    };

    Autodesk.Viewing.Initializer(this.options, () => {
      this.onEnvInitialized();
    });
  }


  public onEnvInitialized() {
    this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement, {});
    this.viewer.initialize();
    this.viewer.loadModel( decodeURI(this.url), {}, () => { }, (aErrorCode) => { } );
  }

  ngOnDestroy() {
    this.viewer.impl.unloadModel(this.viewer.model);
    this.viewer.finish();
    this.viewer = null;
  }

}
