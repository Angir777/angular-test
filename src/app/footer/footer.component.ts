import { Component, OnInit } from '@angular/core';
import { EventManagerServiceService } from '../shared/services/event-manager-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private eventManager: EventManagerServiceService
  ) { }

  ngOnInit(): void {
    this.eventManager.subscribeEvent('ON_NAVBAR_EVENT', (res: any) => {
      console.log('ON_NAVBAR_EVENT', res)
    });
  }

  emmitEventToEventManager() {
    this.eventManager.broadcastEvent({
      name: 'ON_FOOTER_EVENT',
      content: {
        id: 1,
        title: 'test'
      }
    })
  }
}
