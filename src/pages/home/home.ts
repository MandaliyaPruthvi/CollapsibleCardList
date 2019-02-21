import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // toggle
  shownGroup = null;

  diseases = [
    { title: "Mercedes AMG Petronas Motorsport", description: "Team Members: Lewis Hamilton & Valtteri Bottas" },
    { title: "Scuderia Ferrari Mission Winnow", description: "Team Members: Sebastian Vettel & Charles Leclerc" },
    { title: "Aston Martin Red Bull Racing", description: "Team Members: Max Verstappan & Pierre Gasly" },
    { title: "McLaren F1 Team", description: "Team Members: Carlos Sainz & Lando Norris" },
    { title: "Renault F1 Team", description: "Team Members: Nico Hulkenberg & Daniel Ricciardo" },
    { title: "Williams Racing", description: "Team Members: Robert Kubica & George Russell" },
    { title: "Rich Energy Haas F1 Team", description: "Team Members: Romain Grosjean & Kevin Magnussen" },
    { title: "Alfa Romeo Racing", description: "Team Members: Kimi Raikkonen & Antonio Giovinazzi" },    
    { title: "Red Bull Toro Rosso Honda", description: "Team Members:Daniil Kvyat & Alexander Albon" },   
    { title: "Racing Point F1 Team", description: "Team Members: Sergio Perez & Lance Stroll" }
    
  ];

  constructor(public navCtrl: NavController) {

  }

  /**
   * 
   * @param group 
   * this function will set @param shownGrop as per toggle
   */
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  /**
   * 
   * @param group 
   * this function will set value of @param shownGroup for toggle
   */
  isGroupShown(group) {
    return this.shownGroup === group;
  };
}
