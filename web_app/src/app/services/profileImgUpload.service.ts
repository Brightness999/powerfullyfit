import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpEvent
} from "@angular/common/http";
import { map, tap, last } from "rxjs/operators";
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class UploaderService {
  public progressSource = new BehaviorSubject<number>(0);
  public imageUrl = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  upload(file: File, id: number, user: any) {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    let formData = new FormData();
    formData.append("file", file);
    formData.append("user", user);

    const req = new HttpRequest(
      "POST",
      `${environment.API_ENDPOINT}external-asset/file/${id}`,
      formData,
      { ...headers, reportProgress: true },
    );

    return this.http.request(req).pipe(
      map((event: any) => {
        if (event.type === HttpEventType.Response) {
          localStorage.setItem("token", event.body.access_token);
          let decoded: any = jwt_decode(event.body.access_token);

          let user = decoded.user;
          this.imageUrl.next(user.logo.url);
          return user.logo.url;
        }
        else return null;
      }),
      tap((envelope: any) => this.processProgress(envelope)),
      last()
    );
  }

  processProgress(envelope: any): void {
    if (typeof envelope === "number") {
      this.progressSource.next(envelope);
    }
  }
}