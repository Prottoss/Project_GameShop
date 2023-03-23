import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list-page/game-list-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';
import { GenresSelectComponent } from './genres-select/genres-select.component';
import { AddGamesComponent } from './add-games/add-games.component';
import { AddGamesPageComponent } from './add-games-page/add-games-page.component';
import { GenreFilterPipe } from './genre-filter.pipe';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerProfilePageComponent } from './customer-profile-page/customer-profile-page.component';
import { GameComponent } from './game/game.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrdersComponent } from './orders/orders.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { OrdersUserComponent } from './orders-user/orders-user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddKeysComponent } from './add-keys/add-keys.component';
import { AddKeysPageComponent } from './add-keys-page/add-keys-page.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PriceRangePipe } from './price-range.pipe';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { AddCommentsPageComponent } from './add-comments-page/add-comments-page.component';
import { NgbModule } from 'ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamePageComponent,
    NavMenuComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    GenresSelectComponent,
    AddGamesComponent,
    AddGamesPageComponent,
    GenreFilterPipe,
    CheckoutPageComponent,
    CustomerProfilePageComponent,
    GameComponent,
    OrdersPageComponent,
    OrdersComponent,
    PlacedOrderComponent,
    OrdersUserComponent,
    ShoppingCartComponent,
    AddKeysComponent,
    AddKeysPageComponent,
    SearchFilterPipe,
    PriceRangePipe,
    AddCommentsComponent,
    SupplierDetailsComponent,
    SupplierPageComponent,
    LoadingScreenComponent,
    AddCommentsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true},
    GenresSelectComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
