import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HelperService } from './services/helper.service';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomFraming';
  constructor(router: Router, private service: HelperService) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      // console.log(event.urlAfterRedirects);
      gtag('config', 'UA-41611333-1', {
        'page_path': event.urlAfterRedirects
      });
    })
    this.service.getCdn();
  }
}