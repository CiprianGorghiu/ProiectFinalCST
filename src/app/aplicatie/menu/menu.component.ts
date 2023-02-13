import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  titlu: string;
  descriere: string;
  imagine: string;
  modalOpen: boolean = false;
  carduri: { titlu: string, descriere: string, imagine: string }[] = [];
  
  openModal() {
    this.modalOpen = true;
  }
  
  adaugaCard() {
    const card = { titlu: this.titlu, descriere: this.descriere, imagine: this.imagine };
    this.carduri.push(card);
    this.modalOpen = false;
    this.titlu = '';
    this.descriere = '';
    this.imagine = '';
  }
  
  
}

