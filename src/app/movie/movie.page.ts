import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.page.html",
    styleUrls: ["./movie.page.scss"],
})
export class MoviePage implements OnInit {
    movie: any;
    movies: any;
    passedId = null;
    constructor(
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        public alertController: AlertController,
        public toastController: ToastController
    ) {}

    getOneMovie(id: Number) {
        this.apiService.getMovie(id).subscribe((data) => {
            this.movie = data;
        });
    }

    getPeliculas() {
        this.apiService.getPelis().subscribe((data) => {
            this.movies = data;
        });
    }

    async AgregadoFavs() {
        const toast = await this.toastController.create({
            message: "Agregado a favoritos.",
            duration: 2000,
            color: "success",
        });
        toast.present();
    }

    async Descargas() {
        const toast = await this.toastController.create({
            message: "Añadido a Descargas.",
            duration: 2000,
            color: "tertiary",
        });
        toast.present();
    }

    async presentAlertConfirm(nomPeli: String, codPeli: Number) {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Favoritos",
            message:
                "Deseas agregar <strong>" + nomPeli + "</strong> a favoritos?",
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
                        this.AgregadoFavs();
                        console.log("Agregado");
                    },
                },
            ],
        });

        await alert.present();
    }

    ngOnInit() {
        this.passedId = this.activatedRoute.snapshot.paramMap.get("id");
        this.getOneMovie(this.passedId);
        this.getPeliculas();
    }
}
