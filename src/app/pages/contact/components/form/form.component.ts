import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  valores:any = [];

  public formContato = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    duvida: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formContato = this.formBuilder.group({
      nome: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required,Validators.email]],
      duvida: ['', [Validators.required,Validators.minLength(5)]],
    });
  }

  send(): any {
    this.valores.push(this.formContato.value);
    console.log(this.valores)
  }
}
