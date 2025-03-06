import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone : true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);  // Inject AccountService
  model: any = {}; // Dữ liệu nhập từ form đăng nhập

  // 📌 Hàm đăng nhập
  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error : error => console.log(error)
    });
  }

  // 📌 Hàm đăng xuất
  logout() {
    this.accountService.logout();
  }
}
