import { Component } from '@angular/core';

import { initializeApp, database } from 'firebase';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;
  firstCourse:any;

  constructor(af: AngularFire) {
    this.courses$ = af.database.list('courses'); // the $ at the end means that it is an observable
    this.courses$.subscribe();

    this.lesson$ = af.database.object('lessons/-KX_zLkT8IBN0sPh-idV');

    this.lesson$.subscribe();

    this.courses$.map(courses => courses[0])
      .subscribe(
        course => this.firstCourse = course
      )

  }

  listPush() {
    this.courses$.push({description: 'TEST NEW COURSE'})
      .then(
        () => console.log('List Push Done'),
        console.error
      )
  }

  listRemove() {
    this.courses$.remove(this.firstCourse)
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {description: 'Angular2 HTTP MOD'})
  }

  objUpdate() {
    this.lesson$.update({description: 'NEW DESCRIPTION'});
  }

  objSet() {
    this.lesson$.set({description: 'NEW DESCRIPTION'});
  }

  objRemove() {
    this.lesson$.remove();
  }
}
