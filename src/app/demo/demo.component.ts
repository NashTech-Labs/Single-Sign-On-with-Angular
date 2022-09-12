import { Component, OnInit } from '@angular/core';

import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'lib-app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  user: SocialUser | undefined;

  constructor(private readonly _authService: SocialAuthService) {}

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
  }
}
