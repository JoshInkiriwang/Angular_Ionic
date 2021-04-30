import {Component, ElementRef, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Platform} from '@ionic/angular';
import {Camera, CameraResultType, CameraSource, Capacitor} from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('filePicker', { static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDekstop: boolean;
  constructor(
      private platform: Platform,
      private sanitizer: DomSanitizer
  ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    if ((this.platform.is('mobile') && this.platform.is('hybrid')) ||
  this.platform.is('desktop')) {
      this.isDekstop = true;
    }
  }

  async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDekstop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto( {
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }

}
