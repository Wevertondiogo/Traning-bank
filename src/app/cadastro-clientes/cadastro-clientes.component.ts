import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css'],
})
export class CadastroClientesComponent implements OnInit {
  formCadastro = this.fb.group({
    nome: [''],
    cpf: [''],
    email: [''],
    telefone: [''],
    endereco: [''],
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
