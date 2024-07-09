import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { SalesComponent } from './sales/sales.component';
// import { RentalsComponent } from './rentals/rentals.component';
// import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  // { path: 'sales', component: SalesComponent },
  // { path: 'rentals', component: RentalsComponent },
  // { path: 'wishlist', component: WishlistComponent },
  { path: 'about-us', component: AboutUsComponent, children: [
    { path: 'company-profile', component: CompanyProfileComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'team', component: TeamComponent },
    { path: 'join-us', component: JoinUsComponent },
    { path: '', redirectTo: 'company-profile', pathMatch: 'full' }
  ]},
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }