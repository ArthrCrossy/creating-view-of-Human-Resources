import {Component, inject, OnInit} from '@angular/core';
//import { ConsumeService } from '../service/consume.service';
import {ConsumeService} from '../service/consume-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {tap} from 'rxjs';
import Funcionario from '../model/Funcionario';


@Component({
  selector: 'app-consume-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './consume-api.html',
  styleUrl: './consume-api.scss',
  providers: [ConsumeService]

})

export class ConsumeApi implements OnInit {
  private apiUrl = 'http://localhost:8081/api/funcionarios';
  dataRecipe: any; // Para armazenar os dados

  constructor(
    private http: HttpClient,
    private consumeService: ConsumeService
  ) {
  }

  ngOnInit() {
    // Chamando o método fetchAndStoreData e se inscrevendo no Observable retornado
    this.fetchAndStoreData().subscribe({
      next: () => {
        console.log('Dados recebidos com sucesso:', this.dataRecipe);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    });
  }

  /*
  ngOnInit(): void{
    this.consumeService.fetchAndStoreData().subscribe({
      next: () => {
        console.log('Dados recebidos com sucesso:', this.dataRecipe);
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    })
  }*/

  fetchAndStoreData() {
    return this.http.get(this.apiUrl).pipe(
      tap(response => this.dataRecipe = response)
    );
  }

  deletarFuncionario(id: number): void {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      this.consumeService.deletarFuncionario(id).subscribe(
        () => {
          this.dataRecipe = this.dataRecipe.filter((funcionario: Funcionario) => funcionario.id !== id);
          alert('Funcionário excluído com sucesso!');
        },
        (error: any) => {
          console.error('Erro ao excluir funcionário:', error);
          alert('Erro ao excluir funcionário. Por favor, tente novamente.');
        }
      )
    }
  }
}


