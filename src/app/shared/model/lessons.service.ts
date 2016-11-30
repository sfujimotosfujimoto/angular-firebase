import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Lesson} from './lesson';
import {AngularFireDatabase} from 'angularfire2';

@Injectable()
export class LessonsService {

  constructor(private db: AngularFireDatabase) {

  }

  findAllLessons(): Observable<Lesson[]> {
    // used in home.component.ts
    return this.db.list('lessons')
      .do(lessons => console.log('from lessons.service: ', lessons))
      .map(lessons => Lesson.fromJsonList(lessons));
  }
}
