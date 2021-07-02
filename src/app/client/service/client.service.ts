import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account/model/account';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Operator } from 'src/app/shared/models/operator';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8081/client';
  }

  public findClientAccounts(id: string): Observable<Account[]> {
    return this.http.get<Account[]>(this.clientUrl + '/' + id + '/comptes');
  }

  public findOperators(): Observable<Operator[]> {
    return this.http.get<Operator[]>('http://localhost:8081/operateur/all');
  }

  public findClientAccount(id: any): Observable<Account> {
    return this.http.get<Account>('http://localhost:8081/comptes?id=' + id);
  }

}
