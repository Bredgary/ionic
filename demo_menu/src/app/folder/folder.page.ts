import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  txUsuario:string ='Bredgary Valenzuela';
	txClave:string = '123';
	txWeb:string = 'www.sitio.cl';
	txMail:string = 'bred.valenzuela@profesor.duoc.cl';
	txTeleFono:string = '954525874';
	txPropaganda:string = 'Hello';
	txNotificaciones:string = 'Hola';
	msg: string = 'Trabajamos para Usted';
  constructor(public navCtrl: NavController) {

	}
  funActualizar(){
    this.msg = ' Usuario :' + this.txUsuario
              + ' Clave :' + this.txClave
              + ' Web :' + this.txWeb
              + ' Mail :' + this.txMail
              + ' Fono :' + this.txTeleFono
              + ' Propaganda :' + this.txPropaganda
              + ' Notificaciones :' + this.txNotificaciones
              
              ;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
