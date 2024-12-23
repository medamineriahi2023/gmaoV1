import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar class="header">
      <div class="header-start">
        <svg
            width="96"
            height="32"
            viewBox="0 0 96 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
                d="M51.592 10.368H44.872V14.352H51.4V17.52H44.872V24H41.56V7.2H51.592V10.368ZM60.9693 24.336C60.0733 24.336 59.2253 24.2 58.4253 23.928C57.6413 23.656 56.9613 23.272 56.3853 22.776C55.8093 22.264 55.3613 21.648 55.0413 20.928C54.7213 20.192 54.5613 19.384 54.5613 18.504V7.2H57.8493V18.24C57.8493 19.104 58.0973 19.8 58.5933 20.328C59.1053 20.84 59.8973 21.096 60.9693 21.096C62.0413 21.096 62.8253 20.84 63.3213 20.328C63.8333 19.8 64.0893 19.104 64.0893 18.24V7.2H67.4013V18.504C67.4013 19.384 67.2413 20.192 66.9213 20.928C66.6013 21.648 66.1533 22.264 65.5773 22.776C65.0013 23.272 64.3133 23.656 63.5133 23.928C62.7293 24.2 61.8813 24.336 60.9693 24.336ZM76.821 24.336C75.157 24.336 73.757 23.968 72.621 23.232C71.485 22.48 70.685 21.464 70.221 20.184L73.053 18.528C73.357 19.328 73.829 19.96 74.469 20.424C75.109 20.872 75.925 21.096 76.917 21.096C77.829 21.096 78.501 20.928 78.933 20.592C79.381 20.256 79.605 19.832 79.605 19.32C79.605 18.872 79.413 18.472 79.029 18.12C78.645 17.768 77.629 17.352 75.981 16.872C74.829 16.536 73.901 16.168 73.197 15.768C72.493 15.368 71.933 14.848 71.517 14.208C71.117 13.568 70.917 12.784 70.917 11.856C70.917 11.296 71.013 10.728 71.205 10.152C71.413 9.56 71.781 8.992 72.309 8.448C72.837 7.904 73.477 7.504 74.229 7.248C74.981 6.992 75.717 6.864 76.437 6.864C77.797 6.864 78.989 7.2 80.013 7.872C81.053 8.528 81.861 9.448 82.437 10.632L79.653 12.24C78.981 10.8 77.909 10.08 76.437 10.08C75.765 10.08 75.229 10.24 74.829 10.56C74.429 10.88 74.229 11.28 74.229 11.76C74.229 12.272 74.437 12.696 74.853 13.032C75.285 13.368 76.141 13.728 77.421 14.112C78.989 14.608 80.125 15.072 80.829 15.504C81.549 15.936 82.077 16.472 82.413 17.112C82.749 17.752 82.917 18.472 82.917 19.272C82.917 20.04 82.765 20.744 82.461 21.384C82.173 22.008 81.757 22.544 81.213 22.992C80.669 23.424 80.021 23.76 79.269 24C78.517 24.224 77.701 24.336 76.821 24.336ZM88.972 20.832H96.052V24H85.66V7.2H95.932V10.368H88.972V13.944H95.332V17.064H88.972V20.832Z"
                fill="#3F414B"/>
            <path
                d="M16 6.75556V0L1.02839 14.6389C0.462304 15.1924 0.457197 16.1016 1.01703 16.6615L3.55556 19.2"
                fill="#2196F3"/>
            <path
                d="M16 6.75556V0L30.9716 14.6389C31.5377 15.1924 31.5428 16.1016 30.983 16.6615L28.4444 19.2"
                fill="#1878C6"/>
            <path
                d="M3.55556 19.2L9.6 13.1556H16V19.2"
                fill="#1565C0"/>
            <path
                d="M28.4444 19.2L22.4 13.1556H16V19.2"
                fill="#10519D"/>
            <path
                d="M16 25.9556H9.95555L12.9778 22.7556L16 25.9556Z"
                fill="#1565C0"/>
            <path
                d="M16 32L22.0444 25.9556L16 25.9556V32Z"
                fill="#1878C6"/>
            <path
                d="M16 32L9.95555 25.9556H16V32Z"
                fill="#2196F3"/>
            <path
                d="M16 25.9556H22.0444L19.0222 22.7556L16 25.9556Z"
                fill="#10519D"/>
            <path
                d="M7.72363 21.7502C7.18605 22.3085 7.19441 23.1944 7.74243 23.7424L9.95556 25.9556L16 19.5556V13.1556"
                fill="#2196F3"/>
            <path
                d="M24.2764 21.7502C24.814 22.3085 24.8056 23.1944 24.2576 23.7424L22.0444 25.9556L16 19.5556V13.1556"
                fill="#1878C6"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                  width="96"
                  height="32"
                  fill="white"/>
            </clipPath>
          </defs>
        </svg>

        <button mat-icon-button (click)="menuToggled.emit()">
          <mat-icon>menu</mat-icon>
        </button>
       
      </div>
      
      <div class="header-end">
        <button mat-icon-button [matMenuTriggerFor]="notificationsMenu" class="notification-btn" [matBadge]="'2'" matBadgeColor="accent">
          <mat-icon>notifications</mat-icon>
        </button>
        <button mat-icon-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
        </button>
      </div>

      <mat-menu #notificationsMenu="matMenu" class="notifications-menu">
        <div class="menu-header">Notifications</div>
        <button mat-menu-item>
          <mat-icon color="warn">warning</mat-icon>
          <span>Maintenance requise - Chargeuse #1</span>
        </button>
        <button mat-menu-item>
          <mat-icon color="accent">update</mat-icon>
          <span>Contrat proche de l'expiration</span>
        </button>
      </mat-menu>

      <mat-menu #userMenu="matMenu">
        <div class="menu-header">Jean Dupont</div>
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          <span>Mon profil</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Paramètres</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item>
          <mat-icon>logout</mat-icon>
          <span>Déconnexion</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 90px;
      padding: 0 16px;
      background: white;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-start, .header-end {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .header-title {
      margin-left: 16px;
      font-size: 20px;
      font-weight: 500;
      color: #1a1a1a;
    }

    .notification-btn {
      margin-right: 0;
    }

    ::ng-deep {
      .menu-header {
        padding: 8px 16px;
        font-weight: 500;
        color: #666;
        background: #f5f5f5;
      }

      .mat-mdc-menu-item mat-icon {
        margin-right: 12px;
      }
    }
  `]
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<void>();
}
