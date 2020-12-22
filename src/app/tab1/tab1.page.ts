import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { AlertController } from "@ionic/angular";

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
    movies: any;
    movie: any;
    ruta: String;

    constructor(
        private apiService: ApiService,
        public alertController: AlertController
    ) {}

    ionViewDidEnter() {
        this.getPeliculas();
    }

    getPeliculas() {
        this.apiService.getPelis().subscribe((data) => {
            this.movies = data;
        });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Favoritos",
            message: "Deseas agregar a favoritos !!!",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: (blah) => {
                        console.log("Cancelado");
                    },
                },
                {
                    text: "Agregar",
                    handler: () => {
                        console.log("Agregado");
                    },
                },
            ],
        });

        await alert.present();
    }

    ngOnInit() {
        this.getPeliculas();
    }
}
