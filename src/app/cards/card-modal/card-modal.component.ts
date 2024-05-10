import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  cardForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>
  ) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', Validators.maxLength(50)],
      title: ['', [Validators.required, Validators.maxLength(255)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.email, Validators.maxLength(50)]],
      address: ['', Validators.maxLength(255)],
    });
  }

  addCard() {
    if (this.cardForm.valid) {
      const formData = this.cardForm.value;

      const newCard = {
        name: formData.name,
        title: formData.title,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      };

      this.cardService.addNewCard(newCard).subscribe(
        (response) => {
          alert('New card added');
          this.dialogRef.close(); 
          window.location.reload();
        },
        (error) => {
          alert('An error occurred while adding the card');
        }
      );
    }
  }
}
