import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre.page.html',
  styleUrls: ['sobre.page.scss'],
  standalone: false,
})
export class SobrePage {
  currentYear = new Date().getFullYear();

  constructor() {}
}
