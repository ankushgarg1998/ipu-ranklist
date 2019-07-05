import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {
    baseUrl = 'http://localhost:3000/api'

    constructor(private http: HttpClient) {}

    getList(insti, shift, batch, course, sem) {
        return this.http.get(`${this.baseUrl}/list/${insti}/${shift}/${batch}/${course}/${sem}`);
    }
}