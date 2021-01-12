import { Pipe, PipeTransform } from "@angular/core";

import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from "@angular/platform-browser";

@Pipe({
  name: "domSanitizer",
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {}

  transform(
    value: string,
    ...args: unknown[]
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl(value));
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
