import { Component, OnInit } from '@angular/core';
import {Dokter} from '../models/page-dokter.model';
import {DokterService} from '../services/dokter.service';

@Component({
  selector: 'app-page-dokter',
  templateUrl: './page-dokter.page.html',
  styleUrls: ['./page-dokter.page.scss'],
})
export class PageDokterPage implements OnInit {
  dokters: Dokter[];
  constructor(private dokterSrv: DokterService) { }

  ngOnInit() {
    this.dokters = this.dokterSrv.getAllDokters();
  }

}
