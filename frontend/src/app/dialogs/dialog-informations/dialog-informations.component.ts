import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-informations',
  templateUrl: './dialog-informations.component.html',
  styleUrls: ['./dialog-informations.component.scss']
})
export class DialogInformationsComponent implements AfterViewInit {

  map: google.maps.Map;
  lng = 18.67;
  lat = 50.3;

  constructor(
    private _dialogRef: MatDialogRef<DialogInformationsComponent>
  ) { }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  mapInitializer() {
    let coordinates = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 15,
    };
    let marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
    marker.setMap(this.map);
  }

  onCloseDialog() {
    this.closeDialog(false);
  }

  private closeDialog(tryAgain: boolean) {
    this._dialogRef.close(tryAgain);
}

}
