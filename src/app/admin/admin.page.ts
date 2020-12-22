import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToastController } from "@ionic/angular";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.page.html",
    styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
    codigo: any;
    nombre: any;
    duracion: any;
    descripcion: any;
    elenco: any;
    creadores: any;
    pequeno: any;
    grande: any;
    co_categoria: any;
    co_clasificacion: any;

    constructor(
        private apiService: ApiService,
        public toastController: ToastController
    ) {}

    ngOnInit() {}

    async mensajeGuardar() {
        const toast = await this.toastController.create({
            message: "Creación de la pelicula exitosa",
            duration: 2000,
        });
        toast.present();
    }

    agregarPelicula() {
        let data = {
            codigo: this.codigo,
            nombre: this.nombre,
            duracion: this.duracion,
            descripcion: this.descripcion,
            elenco: this.elenco,
            creadores: this.creadores,
            imagen: {
                pequeno: "assets/img/cover/" + this.pequeno,
                grande: "assets/img/" + this.grande,
            },
            co_categoria: this.co_categoria,
            co_clasificacion: this.co_clasificacion,
        };

        this.apiService.postFilm(data).subscribe(() => {
            // (this.codigo = ""),
            //     (this.nombre = ""),
            //     (this.duracion = ""),
            //     (this.descripcion = ""),
            //     (this.elenco = ""),
            //     (this.creadores = ""),
            //     (this.pequeno = ""),
            //     (this.grande = ""),
            //     (this.co_categoria = ""),
            //     (this.co_clasificacion = ""),
            this.mensajeGuardar();
        });
    }
}
