import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sunbird-endpage-v2';
  public endPageConfig : object;

  ngOnInit(){
    this.endPageConfig = {
      showMessage: true,
      'message':"You Just Completed",
      showContentInfo: true,
      'content-info': "B301,B302_STD_1_TAMIL,ENGLISH_LANG_TERM 1_OPT",
      showClockIcon: true,
      'clockIcon': "/assets/clock.png",
      showAuthor: true,
      'author': "Universal Learning Aid (Let's tute)",
      showReplay: true,
      replayIcon: 'assets/replay.png',
      showExit: true,
      exitIcon: 'assets/exit.png',
      showUser: true,
      'userInfo':{
        'name':'Anonymous',
        'mail':'anonymous@yopmail.com'
          },
      'score-details':{
        'time-label':'Time',
        'time-taken': '03:21',
        'score':8,
        'max-score':10
      },
      'assess-info':'quiz class X',
      'context':{"channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "pdata": {
          "id": "local.dummy",
          "ver": "0.0.1",
          "pid": "sunbird.contentplayer.pdf"
          },
        "env": "contentplayer",
        "sid": "b93c5e1b-6679-5d19-dummy",
        "did": "8b049f38a90bfab6e_dummy",
        "cdata": [
          {
           "id": "1621c68d_dummy",
            "type": "ContentSession"
          }]
        },
        "object": {
          "id": "do_312914_dummy",
          "type": "Content",
          "ver": "1",
          "rollup": {}
        },
        "edata":{"type": "content",
        "mode": "play",
        "pageid": "sunbird-player-Endpage",
        "summary": [
          {
            "progress": 3
          },
          {
            "totallength": 80
          },
          {
            "visitedlength": 80
          },
          {
            "visitedcontentend": true
          },
          {
            "totalseekedlength": 78
          },
          {
            "endpageseen": true
          }
        ],
        "duration": 261.375}
      }
    }

  public EndPageEventHandler(valueEmitted) {
      console.log("Telemetry Events:",valueEmitted);
  }
}
