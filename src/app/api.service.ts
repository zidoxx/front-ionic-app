import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    readonly urlApi = "https://seminariouni.herokuapp.com/api/";
    film = "film";
    favorite_list = "favorite_lists";
    classification = "classifications";
    category = "category";

    // urlOneMovie: any;
    //Variables para metodos post
    films;
    favorite_lists;
    constructor(private http: HttpClient) {}

    // Metodos HTTP para Films
    getPelis() {
        return this.http.get(this.urlApi + this.film);
    }
    getMovie(id: Number) {
        // this.urlOneMovie = `http://localhost:3000/api/film/${id}`;
        // return this.http.get(this.urlOneMovie);
        return this.http.get(this.urlApi + this.film + `/${id}`);
    }
    postFilm(films) {
        console.log(films);
        return this.http.post(this.urlApi + this.film, films);
    }
    updateFilm(id: Number, films) {
        return this.http.put(this.urlApi + this.film + `/${id}`, films);
    }
    deleteFilm(id: Number) {
        return this.http.delete(this.urlApi + this.film + `/${id}`);
    }

    // Metodos HTTP para Favorite_list
    getFavorite_lists() {
        return this.http.get(this.urlApi + this.favorite_list);
    }
    getFavorite_list(id: Number) {
        return this.http.get(this.urlApi + this.favorite_list + `/${id}`);
    }
    postFavorite_lists(favorite_list) {
        return this.http.post(this.urlApi + this.favorite_lists, favorite_list);
    }
    putFavorite_lists(id: Number, favorite_list) {
        return this.http.put(
            this.urlApi + this.favorite_lists + `/${id}`,
            favorite_list
        );
    }
    deletFavorite_lists(id: Number) {
        return this.http.delete(this.urlApi + this.favorite_lists + `/${id}`);
    }

    //Metodo HTTP para Classification
    getClassifications() {
        return this.http.get(this.urlApi + this.classification);
    }
    getClassification(id: Number) {
        return this.http.get(this.urlApi + this.classification + `/${id}`);
    }

    //Metodo HTTP para Category
    getCategories() {
        return this.http.get(this.urlApi + this.category);
    }
    getCategory(id: Number) {
        return this.http.get(this.urlApi + this.category + `/${id}`);
    }
}
