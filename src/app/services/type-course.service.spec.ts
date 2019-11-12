import { TestBed } from '@angular/core/testing';

import { TypeCourseService } from './type-course.service';

describe('TypeCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCourseService = TestBed.get(TypeCourseService);
    expect(service).toBeTruthy();
  });
});
