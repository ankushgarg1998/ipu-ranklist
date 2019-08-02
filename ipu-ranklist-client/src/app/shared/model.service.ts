import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {
    baseUrl = 'http://ec2-13-233-247-130.ap-south-1.compute.amazonaws.com/api';
    // baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getList(college, shift, batch, branch, sem) {
        return this.http.get(`${this.baseUrl}/list`, {
            params: {
                insti: college,
                shift: shift,
                batch: batch,
                branch: branch,
                sem: sem
            }
        });
    }

    getStudent(enroll) {
        return this.http.get(`${this.baseUrl}/student`, {
            params: {
                enroll: enroll
            }
        });
    }
}