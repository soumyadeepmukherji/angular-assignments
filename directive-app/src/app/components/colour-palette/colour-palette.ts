import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-colour-palette',
  styleUrl: './colour-palette.css',
  templateUrl: './colour-palette.html',
})
export class ColourPalette {
  colors = ['Red','Blue','Green','Yellow','Purple']
}
