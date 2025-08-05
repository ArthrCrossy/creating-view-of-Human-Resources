import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Funcionario from '../model/Funcionario';

@Injectable({
  providedIn: 'any',
})
export class ConsumeService {

  private apiUrl = 'http://localhost:8081/api/funcionarios';
  data: Funcionario[] = []; // Para armazenar os dados

  fetchAndStoreData(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }


  constructor(private http: HttpClient) {
    this.data = [];
    console.log("Serviço inicializado");
  }


}
