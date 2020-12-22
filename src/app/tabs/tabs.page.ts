import { Component, OnInit } from "@angular/core";
import { ApiService } from '../api.service';


@Component({
    selector: "app-tabs",
    templateUrl: "tabs.page.html",
    styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  films: any;

  constructor(
    private apiService: ApiService) {}

    // ionViewDidEnter() {
    //   this.getFilms;
    // }

    // getFilms() {
    //   this.apiService.getFilms().subscribe((data) => {
    //     this.films = data;
    //     console.log(this.films);
    //   })
    // }
}
