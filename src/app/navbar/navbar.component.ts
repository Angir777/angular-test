import { Component, OnInit } from '@angular/core';
import { EventManagerServiceService } from '../shared/services/event-manager-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  test: any = {};

  constructor(
    private eventManager: EventManagerServiceService
  ) { }

  ngOnInit(): void {
    this.eventManager.subscribeEvent('ON_FOOTER_EVENT', (res: any) => {
      console.log('ON_FOOTER_EVENT', res);
      this.test = res.content;
    });

    setTimeout(() => {
      this.emmitEventToEventManager();
    }, 5000);
  }

  emmitEventToEventManager() {
    this.eventManager.broadcastEvent({
      name: 'ON_NAVBAR_EVENT',
      content: {
        id: 2,
        title: '2'
      }
    })
  }
}
