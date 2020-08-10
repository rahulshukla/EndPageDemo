import { Component, OnInit, Output,Input, EventEmitter, OnDestroy} from '@angular/core';

import { EndPageEvent } from './endPageEvents';

@Component({
  selector: 'lib-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
  // inport and export for end-page Library
  @Input() endPageConfig: object;
  // @Input() userData: navComponentInput;
  @Output() sendMetadata: EventEmitter<object> = new EventEmitter<EndPageEvent>();

  public EndPageEventObject : EndPageEvent = {
    eid: '',
    ets: 9082138948,
    ver: "3.2",
    mid: "",
    actor: {},
    context: {},
    object: {},
    tags: ['505c7c48ac6dc1edc9b08f21db5a571d'],
    edata: {}
  }

  constructor() { 
  }

  ngOnInit(): void {
    this.setEndPageEvent('END',this.endPageConfig['context'],this.endPageConfig['object'],{
      "id": "8b049f38a_dummy",
      "type": "User"
    },{})
  }

  setEndPageEvent(eid: string, contextEvent:object, ObjectEvent:object, user:object, edata:object ){
    this.EndPageEventObject.eid=eid;
    this.EndPageEventObject.context = contextEvent;
    this.sendMetadata.emit(this.EndPageEventObject);
  }

  replay(): void {

  }

  exit(): void {

  }

  ngOnDestroy(): void {

  }

}
