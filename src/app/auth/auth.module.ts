import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { OrderService } from './services/order.service';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,

  ],
  declarations: [HomeComponent, LoginComponent, AdminComponent, NoAccessComponent],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    OrderService
   ]
})
export class AuthModule { }
