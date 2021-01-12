import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { ExternalAssetService } from "@pf/services/external-asset.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "pf-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.css"],
})
export class FileUploaderComponent implements OnInit {
  @Output() uploadStarted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() uploadCompleted: EventEmitter<any> = new EventEmitter<any>();

  savedAsset: any;

  assetForm: FormGroup = this.formBuilder.group({
    url: [null, Validators.required],
  });

  url: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private externalAssetService: ExternalAssetService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  saveAsset(url) {
    this.uploadStarted.emit(true);

    console.log(url);

    const youTubeId = this._parseYoutubeId(url);

    let asset = {
      type: "youtube",
      url: `https://www.youtube.com/embed/${youTubeId}`,
    };

    this.externalAssetService.saveAsset(asset).subscribe((res) => {
      console.log(res);
      this.savedAsset = res;

      this.uploadStarted.emit(false);
      this.uploadCompleted.emit(res);
    });
  }

  protected _parseYoutubeId(url: string): string {
    const regex = /^https?:\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(v\/|u\/\w\/|embed\/|watch\?v=|&v=)?([^#&?]*).*/;

    return url.match(regex) ? RegExp.$2 : undefined;
  }
}
