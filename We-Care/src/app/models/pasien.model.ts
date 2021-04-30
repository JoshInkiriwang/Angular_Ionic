export interface Pasien {
    // Info Pasien
    id_pasien: string;
    nama_pasien: string;
    ruangan_perawatan: string;
    no_bpjs_pasien: string;
    imageUrl: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    // .....
    nama_dokter: string;
    suhu_badan: number;
}
