import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export type PlantBadge = 'BESTSELLER' | 'LOWLIGHT' | 'STATEMENT' | 'EASYCARE';

export interface Plant {
  id: string;
  name: string;
  latinName: string;
  price: number;
  potSize: number;
  light: string;
  water: string;
  badge: PlantBadge;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  private apiUrl = 'http://localhost:5555/api/plants';

  plants: Plant[] = [];

  plantsLoading = false;
  plantsError: string | null = null;

  addPlantError: string | null = null;
  isAddingPlant = false;

  deletingPlantId: string | null = null;

  editingPlantId: string | null = null;

  addPlantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addPlantForm = this.fb.group({
      name: ['', Validators.required],

      latinName: ['', Validators.required],

      price: [0, Validators.required],

      potSize: [0, Validators.required],

      light: ['', Validators.required],

      water: ['', Validators.required],

      badge: ['BESTSELLER', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadPlants();
  }

  get pf() {
    return this.addPlantForm.controls;
  }

  // =========================
  // GET
  // =========================

  loadPlants(): void {
    this.plantsLoading = true;

    this.http.get<Plant[]>(this.apiUrl).subscribe({
      next: (plants) => {
        this.plants = plants;

        this.plantsLoading = false;
      },

      error: () => {
        this.plantsError = 'Unable to load plants.';

        this.plantsLoading = false;
      },
    });
  }

  // =========================
  // ADD / UPDATE
  // =========================

  onAddPlant(): void {
    if (this.addPlantForm.invalid) {
      this.addPlantForm.markAllAsTouched();

      return;
    }

    this.isAddingPlant = true;
    this.addPlantError = null;

    const payload = this.addPlantForm.value;

    // UPDATE

    if (this.editingPlantId) {
      this.http
        .put<Plant>(`${this.apiUrl}/${this.editingPlantId}`, payload)
        .subscribe({
          next: () => {
            this.loadPlants();

            this.cancelEdit();
          },

          error: () => {
            this.addPlantError = 'Unable to update plant.';

            this.isAddingPlant = false;
          },
        });

      return;
    }

    // ADD

    this.http.post<Plant>(this.apiUrl, payload).subscribe({
      next: (plant) => {
        this.plants.unshift(plant);

        this.addPlantForm.reset({
          name: '',

          latinName: '',

          price: 0,

          potSize: 0,

          light: '',

          water: '',

          badge: 'BESTSELLER',
        });

        this.isAddingPlant = false;
      },

      error: () => {
        this.addPlantError = 'Unable to add plant.';

        this.isAddingPlant = false;
      },
    });
  }

  // =========================
  // EDIT
  // =========================

  onEditPlant(plant: Plant): void {
    this.editingPlantId = plant.id;
    this.addPlantError = null;

    this.addPlantForm.patchValue({
      name: plant.name,

      latinName: plant.latinName,

      price: plant.price,

      potSize: plant.potSize,

      light: plant.light,

      water: plant.water,

      badge: plant.badge,
    });

    window.scrollTo({
      top: 0,

      behavior: 'smooth',
    });
  }

  // =========================
  // CANCEL EDIT
  // =========================

  cancelEdit(): void {
    this.editingPlantId = null;

    this.isAddingPlant = false;

    this.addPlantError = null;

    this.addPlantForm.reset({
      name: '',

      latinName: '',

      price: 0,

      potSize: 0,

      light: '',

      water: '',

      badge: 'BESTSELLER',
    });
  }

  // =========================
  // DELETE
  // =========================

  onDeletePlant(plant: Plant): void {
    this.deletingPlantId = plant.id;
    this.plantsError = null;

    this.http.delete(`${this.apiUrl}/${plant.id}`).subscribe({
      next: () => {
        this.plants = this.plants.filter((p) => p.id !== plant.id);

        this.deletingPlantId = null;

        if (this.editingPlantId === plant.id) {
          this.cancelEdit();
        }
      },

      error: () => {
        this.plantsError = 'Unable to delete plant.';

        this.deletingPlantId = null;
      },
    });
  }

  // =========================
  // TrackBy
  // =========================

  trackByPlant(index: number, plant: Plant): string {
    return plant.id;
  }
}
