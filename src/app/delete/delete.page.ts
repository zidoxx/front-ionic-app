import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
    selector: "app-delete",
    templateUrl: "./delete.page.html",
    styleUrls: ["./delete.page.scss"],
})
export class DeletePage implements OnInit {
    codigo: any;
    codigo_pelicula: any;
    myFlag: Boolean;
    busqueda: Boolean;
    informacion: any;

    constructor(
        private apiService: ApiService,
        public toastController: ToastController,
        public alertController: AlertController
    ) {}

    ngOnInit() {}

    async mensajeBorrar() {
        const toast = await this.toastController.create({
            message: "Pelicula Eliminada",
            duration: 2000,
            color: "danger",
        });
        toast.present();
    }

    async mensajeBusqueda() {
        if (await this.busqueda) {
            const toast = await this.toastController.create({
                message: "Encontro cliente",
                duration: 2000,
            });

            this.busqueda = false;
            toast.present();
        } else {
            const toast = await this.toastController.create({
                message: "No Encontro cliente",
                duration: 2000,
            });
            toast.present();
        }
    }

    buscarPelicula() {
        this.apiService.getMovie(this.codigo_pelicula).subscribe((data) => {
            this.informacion = data;
            // this.myFlag = true;
            this.busqueda = true;
            this.mensajeBusqueda();
        });
        this.mensajeBusqueda();
        this.myFlag = false;
    }

    borrarPelicula() {
        this.apiService.deleteFilm(this.codigo_pelicula).subscribe((data) => {
            console.log(data);
        });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Favoritos",
            message: "Deseas eliminar la pelicula??",
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
                        this.borrarPelicula();
                        this.mensajeBorrar();
                    },
                },
            ],
        });

        await alert.present();
    }
}
