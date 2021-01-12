import { Injectable } from "@angular/core";

import { BackendProxy } from "./backend.proxy";

import { Observable, throwError } from "rxjs";
import { tap, catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ExternalAssetService {
  constructor(private backendProxy: BackendProxy) {}

  saveAsset(asset) {
    console.log(asset);
    return this.backendProxy.post("external-asset", asset);
  }
}
