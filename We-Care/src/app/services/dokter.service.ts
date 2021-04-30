import { Injectable } from '@angular/core';
import {Dokter} from '../models/page-dokter.model';

@Injectable({
  providedIn: 'root'
})
export class DokterService {
  private dokters: Dokter[] = [
    {
      id_dokter: 'd001',
      nama_dokter: 'Sulaiman',
      tempat_lahir: 'Subang',
      tanggal_lahir: '23 Maret 1979',
      imageUrl: 'https://www.stockvault.net/data/2015/09/01/177580/preview16.jpg'
    },
    {
      id_dokter: 'd002',
      nama_dokter: 'Kristanto',
      tempat_lahir: 'Gorontalo',
      tanggal_lahir: '06 Agustus 1982',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gRRRKdc8pONgLCcJMCTSlhh6fT2YZN8r4A&usqp=CAU'
    },
    {
      id_dokter: 'd003',
      nama_dokter: 'Luis',
      tempat_lahir: 'Yogyakarta',
      tanggal_lahir: '16 Oktober 1986',
      imageUrl: 'https://st.depositphotos.com/2702761/3304/i/600/depositphotos_33044395-stock-photo-doctor-smiling.jpg'
    }
  ];
  constructor() { }

  getAllDokters(){
    return [...this.dokters];
  }

  getDokter(dokterId: string) {
    return {...this.dokters.find( dokter => {
      return dokter.id_dokter === dokterId;
      })};
  }
}
