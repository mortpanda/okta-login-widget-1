import { Injectable } from '@angular/core';
import { OktaAuth } from "@okta/okta-auth-js";
import { OktaConfigService } from './okta-config.service';

@Injectable({
  providedIn: 'root'
})
export class OktaClientService {

  constructor(private OktaConfigService: OktaConfigService) { }

  config = {
    clientId: this.OktaConfigService.strClientID,
    issuer: this.OktaConfigService.strIssuer,
    redirectUri: this.OktaConfigService.strRedirectURL,
    postLogoutRedirectUri: this.OktaConfigService.strRedirectURL,
    responseMode: this.OktaConfigService.strResponseMode,
    responseType: this.OktaConfigService.strResponseType,
    scopes: this.OktaConfigService.strScope,
    prompt: this.OktaConfigService.strPrompt,

  };

  OktaClient = new OktaAuth(this.config);


}
