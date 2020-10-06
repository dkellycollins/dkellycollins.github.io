import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-frame',
  template: `
    <iframe [src]="src$ | async" class="frame"></iframe>
  `,
  styles: [
    `.frame { border: none; height: 100%; width: 100%; }`
  ]
})
export class FramePage {

  public readonly src$: Observable<SafeResourceUrl>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.src$ = this.route.data.pipe(
      map(data => data.src),
      map(src => this.domSanitizer.bypassSecurityTrustResourceUrl(src))
    );
  }

}
