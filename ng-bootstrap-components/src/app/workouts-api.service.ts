import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return MY_CONSTANT;
  }

  getWorkoutsPaged(currPage, pageSize) {
    return this.http.get<any[]>(`${this.baseUrl}/workouts?_page=${currPage}&_limit=${pageSize}`);
  }

  getWorkout(id) {
    return this.http.get<any>(`${this.baseUrl}/workouts/${id}`);
  }

  addWorkout(workout: any) {
    return this.http.post(`${this.baseUrl}/workouts`, workout);
  }

  updateWorkout(workout: any) {
    return this.http.put(`${this.baseUrl}/workouts/${workout.id}`, workout);
  }

  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout);
    } else {
      return this.addWorkout(workout);
    }
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  getLocations() {
    return this.http.get<any[]>(`${this.baseUrl}/locations`);
  }

  searchLocations(searchTerm) {
    return this.http.get<any[]>(`${this.baseUrl}/locations?q=${searchTerm}`);
  }

  getPerfTargets() {
    return this.http.get(`${this.baseUrl}/performanceTargets`);
  }
  
  savePerfTargets(perfTargets: any){
    return this.http.put(`${this.baseUrl}/performanceTargets`, perfTargets);
  }
  
}

const MY_CONSTANT: any = [
  {
    "id": 10,
    "date": "2019-8-12",
    "type": "Man",
    "distance": "105"
  },
  {
    "id": 1,
    "date": "2018-8-4",
    "type": "bike",
    "distance": "101"
  },
  {
    "id": 2,
    "date": "2018-8-5",
    "type": "row",
    "distance": 200
  },
  {
    "type": "bike",
    "date": "2018-8-6",
    "distance": "200",
    "id": 4
  },
  {
    "type": "run",
    "date": "2018-8-31",
    "distance": "120",
    "id": 5,
    "rating": null
  },
  {
    "type": "row",
    "date": "2018-8-30",
    "distance": "700",
    "id": 6,
    "rating": null
  },
  {
    "date": "2018-9-21",
    "distance": "21",
    "id": 7,
    "type": "run"
  },
  {
    "rating": null,
    "type": "run",
    "date": "2018-9-1",
    "distance": "2000",
    "id": 8
  }
];