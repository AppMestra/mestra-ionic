import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  apiData: any;
  mensagens: any[] = [];
  entradas: any[] = [];
  loading = false;
  error: string | null = null;
  
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.loading = true;
    this.error = null;

    try {
      this.apiData = await this.http.get(`http://localhost:8080/ping`).toPromise();
      
      try {
        this.mensagens = await this.http.get<any[]>(`${this.baseUrl}/mensagens`).toPromise() || [];
      } catch (err) {
        console.log('Erro ao carregar mensagens:', err);
        this.mensagens = [];
      }

      try {
        this.entradas = await this.http.get<any[]>(`${this.baseUrl}/entradas`).toPromise() || [];
      } catch (err) {
        console.log('Erro ao carregar entradas:', err);
        this.entradas = [];
      }

    } catch (err: any) {
      this.error = 'Erro ao conectar com a API Golang. Verifique se ela está rodando na porta 8080.';
      console.error('Erro:', err);
    } finally {
      this.loading = false;
    }
  }

  refreshData() {
    this.loadData();
  }
}
