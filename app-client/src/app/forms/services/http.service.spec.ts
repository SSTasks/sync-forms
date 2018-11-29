import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {HttpService} from './http.service';
import {Form} from './form';

describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController;
    let form: Form;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });

        service = TestBed.get(HttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should retrieve from the API via GET', () => {
        const dummyPost: Form[] = [
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            },
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            }
        ];
        service.getAllForms().subscribe(forms => {
            expect(forms.length).toBe(2);
            expect(forms).toEqual(dummyPost);
        });

        const request = httpMock.expectOne('/form');
        expect(request.request.method).toBe('GET');

        request.flush(dummyPost);
    });

    it('Should retrieve from the API via POST', () => {
        const dummyPost: Form[] = [
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            },
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            }
        ];
        let form = {
            title: 'New form',
            author: 'Ya',
            preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
            groups: ['Dnipro-142'],
            rows: [],
            description: ''
        };

        service.saveForm(form).subscribe(forms => {
            expect(forms.length).toBe(2);
            expect(forms).toEqual(dummyPost);
        });

        const request = httpMock.expectOne('/form');
        expect(request.request.method).toBe('POST');

        request.flush(dummyPost);
    });

    it('Should retrieve from the API via PUT', () => {
        const dummyPost: Form[] = [
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            },
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            }
        ];
        let form = {
            _id: 'd3h2ijbd231edq123',
            title: 'New form',
            author: 'Ya',
            preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
            groups: ['Dnipro-142'],
            rows: [],
            description: ''
        };

        service.saveForm(form).subscribe(forms => {
            expect(forms.length).toBe(2);
            expect(forms).toEqual(dummyPost);
        });

        const request = httpMock.expectOne('/form');
        expect(request.request.method).toBe('PUT');

        request.flush(dummyPost);
    });

    it('Should retrieve from the API via DELETE', () => {
        const dummyPost: Form[] = [
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            },
            {
                title: 'New form',
                author: 'Ya',
                preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
                groups: ['Dnipro-142'],
                rows: [],
                description: ''
            }
        ];
        let form = {
            _id: 'd3h2ijbd231edq123',
            title: 'New form',
            author: 'Ya',
            preview: 'https://ps.w.org/simple-registration-form/trunk/screenshot-1.png?rev=1790752',
            groups: ['Dnipro-142'],
            rows: [],
            description: ''
        };

        service.delForm(form._id).subscribe(forms => {
            expect(forms.length).toBe(2);
            expect(forms).toEqual(dummyPost);
        });

        const request = httpMock.expectOne(`/form/${form._id}`);
        expect(request.request.method).toBe('DELETE');

        request.flush(dummyPost);
    });
});