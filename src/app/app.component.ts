import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Rides In Progress';
  ride_id;
  
  show_rides_html=true;
  show_read_one_ride_html=false;
  show_create_player_html=false;
  show_read_one_player_html=false;
  show_update_player_html=false;
  show_delete_player_html=false;
  show_read_player_html=false;

    showReadOneRide($event){
      // set title and product ID
      this.title= $event.title;
      this.ride_id= $event.ride_id;
      console.log("EVENT"+ $event.ride_id);
      // hide all html then show only one html
      this.hideAll_Html();
      this.show_read_one_ride_html=true;
    }

    showCreatePlayer($event){
 
      // set title
      this.title=$event.title;
   
      // hide all html then show only one html
      this.hideAll_Html();
      this.show_create_player_html=true;
    }

    showReadPlayer($event){
      // set title
      this.title=$event.title;
   
      // hide all html then show only one html
      this.hideAll_Html();
      this.show_read_player_html=true;
    }

    hideAll_Html(){
      this.show_rides_html = false;
      this.show_read_one_ride_html=false;
      this.show_read_player_html=false;
      this.show_read_one_player_html=false;
      this.show_create_player_html=false;
      this.show_update_player_html=false;
      this.show_delete_player_html=false;
  }
}


