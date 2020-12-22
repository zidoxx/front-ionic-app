import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToastController } from "@ionic/angular";

@Component({
    selector: "app-update",
    templateUrl: "./update.page.html",
    styleUrls: ["./update.page.scss"],
})
export class UpdatePage implements OnInit {
    datos: any;
    codigo: any;
    codigo_pelicula: any;
    nombre: any;
    descripcion: any;
    pequeno: any;
    grande: any;
    myFlag: Boolean;
    busqueda: Boolean;
    constructor(
        private apiService: ApiService,
        public toastController: ToastController
    ) {}

    ngOnInit() {}

    async mensajeActualizar() {
        const toast = await this.toastController.create({
            message: "Cliente actualizado",
            duration: 2000,
            color: "success",
        });
        toast.present();
    }

    async mensajeBusqueda() {
        if (await this.busqueda) {
            const toast = await this.toastController.create({
                message: "Encontro cliente",
                duration: 2000,
                color: "success",
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
            this.datos = data;
            console.log(data);
            this.myFlag = true;
            this.busqueda = true;
            this.mensajeBusqueda();
        });
        this.mensajeBusqueda();
        this.myFlag = false;
    }

    actualizarPelicula() {
        let data = {
            nombre: this.nombre,
            descripcion: this.descripcion,
            imagen: {
                pequeno: this.pequeno,
                grande: this.grande,
            },
        };
        this.apiService.updateFilm(this.codigo_pelicula, data).subscribe(() => {
            this.nombre = "";
            this.descripcion = "";
            this.pequeno = "";
            this.grande = "";
            this.mensajeActualizar();
            this.myFlag = false;
        });
    }
}
