import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "./course";
import {AngularFireDatabase} from "angularfire2";
import {Lesson} from "./lesson";

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses').map((course) => (
      Course.fromJsonArray(course)
    ))
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map(results => results[0]);
  }

  findAllLessonsForCourse(courseUrl: string): Observable<Lesson[]> {
    const course$ = this.findCourseByUrl(courseUrl);

    const lessonsPerCourse$ = course$
      .switchMap(course => this.db.list('lessonsPerCourse/' + course.$key));

    const courseLessons$ = lessonsPerCourse$
      .map(lspc => lspc.map(lpc => this.db.object('lessons/' + lpc.$key)))
      .flatMap(fbojs => Observable.combineLatest(fbojs))
      .do(console.log);


    courseLessons$.subscribe();

    return Observable.of([]);
  }



}
