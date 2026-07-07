import { Component } from '@angular/core';

@Component({
  selector: 'app-care',
  standalone: true,
  templateUrl: './care.component.html',
  styleUrl: './care.component.css',
})
export class CareComponent {
  careTips = [
    {
      number: '01',
      icon: '☀',
      title: 'Light',
      description:
        'Most houseplants thrive in bright indirect light — a metre from a south-facing window is the sweet spot for foliage plants.',
    },
    {
      number: '02',
      icon: '💧',
      title: 'Watering',
      description:
        'When in doubt, underwater. Allow the top inch of soil to dry before watering again. Always drain — roots hate sitting in water.',
    },
    {
      number: '03',
      icon: '〰',
      title: 'Humidity',
      description:
        'Group plants together to create a microclimate, or set pots on a pebble tray with water to raise ambient humidity naturally.',
    },
  ];
}
