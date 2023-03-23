import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGamesPageComponent } from './add-games-page/add-games-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CustomerProfilePageComponent } from './customer-profile-page/customer-profile-page.component';
import { GameListComponent } from './game-list-page/game-list-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersUserComponent } from './orders-user/orders-user.component';
import { AddKeysPageComponent } from './add-keys-page/add-keys-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';

const routes: Routes = [
  //{path: "", redirectTo:"games", pathMatch: "full"},
  {path: "cart", component: ShoppingCartComponent},
  {path: "register", component: RegisterComponent},
  {path: "games", component: GameListComponent},
  {path: "publishers", component: SupplierPageComponent},
  {path: "games/:gameId", component: GamePageComponent},
  {path: "checkout", component: CheckoutPageComponent },
  {path: "addGames", component: AddGamesPageComponent},
  {path: "addKeys", component: AddKeysPageComponent},
  {path: "userOrders", component: OrdersUserComponent},
  {path: "adminOrders", component: AdminUserPageComponent},
  {path: "profile", component: CustomerProfilePageComponent},
  {path: "logout", component: LoginComponent},
  {path: "orders", component: OrdersComponent},
  {path: "userOrders/:orderId", component: OrdersPageComponent},
  {path: "adminOrders/:userID", component: OrdersComponent},
  {path: "placedOrder", component: PlacedOrderComponent},
  {path: "", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
