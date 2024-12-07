import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from './services/service.service';
import { CommonModule } from '@angular/common';
import { Contacto } from './interface/contact.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone:true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[CommonModule,ReactiveFormsModule,]
})


export class ContactComponent implements OnInit{
  contactForm!:FormGroup;

  constructor(private fb: FormBuilder, private servicesService: ServicesService) {}
  //private ServicesService: ServicesService) {
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }





  onSubmit(): void {
    if (this.contactForm.valid) {
      this.servicesService.sendEmail(this.contactForm.value).subscribe({
        next: () => alert('Mensaje enviado con éxito.'),
        error: () => alert('Hubo un error al enviar el mensaje.')
      });
    }
  }
}
