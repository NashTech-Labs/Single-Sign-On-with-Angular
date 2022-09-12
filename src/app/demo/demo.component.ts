import { Component, OnInit } from '@angular/core';

import { GoogleLoginProvider, SocialAuthService } from 'lib';
import { SocialUser } from 'lib';
import {
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'lib';

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
