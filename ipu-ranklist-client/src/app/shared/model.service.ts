import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {
    baseUrl = 'https://ipuranklist.com/api';
    // baseUrl = 'http://ec2-13-126-183-106.ap-south-1.compute.amazonaws.com/api';
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

    getBcaList(college, batch, sem) {
        return this.http.get(`${this.baseUrl}/bca-list`, {
            params: {
                insti: college,
                batch: batch,
                sem: sem
            }
        });
    }

    getBbaList(college, batch, branch, sem) {
        return this.http.get(`${this.baseUrl}/bba-list`, {
            params: {
                insti: college,
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