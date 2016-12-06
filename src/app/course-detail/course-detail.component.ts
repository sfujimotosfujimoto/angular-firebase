import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../shared/model/courses.service";
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../shared/model/course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course>;
  // lessons$: Observable<Lesson[]>;

  lessons: Lesson[];
  courseUrl: string;


  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {

  }

  ngOnInit() {
    this.courseUrl = this.route.snapshot.params['id'];
    // console.log('courseUrl: ', this.courseUrl);


    this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);



    const lessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3);
    // this.lessons$ = this.coursesService.findAllLessonsForCourse(courseUrl);

    lessons$.subscribe(lessons => this.lessons = lessons );


  }

  next() {
    this.coursesService.loadNextPage(
      this.courseUrl,
      this.lessons[this.lessons.length - 1].$key,
      3
    )
      .subscribe(lessons => this.lessons = lessons);
  }

  previous() {

  }



}
