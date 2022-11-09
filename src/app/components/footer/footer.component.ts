import { Component, OnInit } from '@angular/core';
import{faFacebookF} from'@fortawesome/free-brands-svg-icons';
import{faLinkedinIn} from'@fortawesome/free-brands-svg-icons';
import{faTwitter} from'@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faLinkedin = faLinkedinIn;
  faTwitter = faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
