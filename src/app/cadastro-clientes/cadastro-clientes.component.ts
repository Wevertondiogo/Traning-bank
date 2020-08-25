import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css'],
})
export class CadastroClientesComponent implements OnInit {
  formCadastro = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    endereco: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  cadastro() {
    let info = JSON.stringify(this.formCadastro.value);
    localStorage.setItem('cadastro', info);
    this.router.navigate(['/cadastro-concluido']);
    console.log(this.formCadastro.value);
  }
}
