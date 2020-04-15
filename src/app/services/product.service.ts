import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, XhrFactory } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import { GLOBAL } from './global';

@Injectable()
export class ProductService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    /**
     * Function to extract all products
     * For the map you have to run: 'npm install --save rxjs-compat'
     * 
     * @param 
     */
    getProduct(): Observable<any> {
        return this._http.get(this.url + 'products').pipe(
            map(data => this.extractData(data)),
            catchError(this.handleError)
        );
    }

    /**
     * Function to save a product
     * 
     * @param product
     */
    addProduct(product: Product) {
        let json = JSON.stringify(product);
        let params = 'json=' + json;
        // let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'addProduct', params, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) })
            .pipe(map(data => this.extractData(data)));
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
        console.log("Length files: "+ files.length);
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i=0; i <= files.length-1; i++){
                formData.append('uploads[]', files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(xhr.response);
                    }else{
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
        
    }

    /**
     * Function to extract the data when the server return some
     *
     * @param res
     */
    private extractData(res: Object) {
        let body = res;
        return body || {};
    }

    /**
    * Function to handle error when the server return an error
    *
    * @param error
    */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
            console.error(
                'Backend returned code ${error.status}, ' + 'body was: ${error.error}'
            );
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }
}