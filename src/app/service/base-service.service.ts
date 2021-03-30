import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService<T extends { id: number }> {

  apiUrl: string = 'http://localhost:3000';
  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  error$: Subject<string> = new Subject();

  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list),
        err => console.error(err)
      );
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.entityName}`, entity).pipe(
      tap(e => this.getAll())
    );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${this.entityName}`, entity);
  }

  remove(entity: T): void {
    this.http.delete<T>(`${this.apiUrl}/${this.entityName}/${entity.id}`)
      .pipe(
        tap(e => this.getAll())
      ).subscribe(
        () => { },
        err => this.error$.next(err)
      );
  }


}
