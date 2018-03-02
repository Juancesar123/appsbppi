import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 
 /**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  datapeta;
  map: GoogleMap;
  constructor(private nativeGeocoder: NativeGeocoder,public navCtrl: NavController, public navParams: NavParams) {
    this.datapeta = this.navParams.get('datapeta');
  }
  ionViewDidLoad() {
    this.loadMap()
  }

  loadMap() {
    //console.log(item.alamat);
    this.nativeGeocoder.forwardGeocode(this.datapeta.alamat)
    .then((coordinates: NativeGeocoderForwardResult) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: coordinates.latitude ,
            lng: coordinates.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);
      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log(parseFloat(coordinates.latitude));
          //alert(parseInt(coordinates.latitude));
          // Now you can use all methods safely.
          this.map.addMarker({
              title: 'Ionic',
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: parseFloat(coordinates.latitude),
                lng: parseFloat(coordinates.longitude)
              }
            })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });
        });
    })
    .catch((error: any) => console.log(error));
  }
}
