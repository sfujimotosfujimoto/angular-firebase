import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "./course";
import {AngularFireDatabase} from "angularfire2";

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses').map((course) => (
      Course.fromJsonArray(course)
    ))
  }

  findLessonsForCourse(courseUrl: string) {
    console.log(courseUrl)
  }

}
