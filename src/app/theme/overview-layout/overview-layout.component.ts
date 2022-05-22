import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: any;
  }
}

@Component({
  selector: 'app-overview-layout',
  templateUrl: './overview-layout.component.html',
  styleUrls: ['./overview-layout.component.scss'],
})
export class OverviewLayoutComponent implements OnInit {
  footerInfo: any[] = [];
  subInfo: string[] = [];
  clientId: string = 'e70a48bcd6e94d56a003f945a1ea984c';
  clientSecret: string = '5d6dc6aa5f494ec5bf7f031aed948157';
  redirectUri: string = 'http://localhost:4200/open';
  scopes: string =
    'user-read-private user-read-email playlist-read-private streaming app-remote-control';
    deviceId: string = '';

  constructor(private translate: TranslateService, private router: Router) {}
  
  ngOnInit(): void {
    this.footerInfo = [
      ['CÔNG TY', 'Giới thiệu', 'Việc làm', 'For the Record'],
      [
        'CÔNG TY',
        'Giới thiệu',
        'Việc làm',
        'For the Record',
        'Việc làm',
        'For the Record',
      ],
      ['CÔNG TY', 'Giới thiệu', 'Việc làm', 'For the Record'],
    ];

    this.subInfo = [
      _('overview-layout.legal-message'),
      'Trung tâm bảo mật',
      'Chính sách Quyền riêng tư',
      'Cookie',
      'Giới thiệu Quảng cáo',
    ];

    window.onSpotifyWebPlaybackSDKReady = async () => {
      const token = localStorage.getItem('token');
      const player = await new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb: any) => {
          cb(token);
        },
      });
      player.connect();
      interface IPlayer {
        device_id: string;
      }
      console.log('player', player);
      await player.addListener('ready', ({ device_id }: IPlayer) => {
        console.log('Ready with Device ID', device_id);
        this.deviceId = device_id;
      });

      // Not Ready
      await player.addListener('not_ready', ({ device_id }: IPlayer) => {
        console.log('Device ID has gone offline', device_id);
      });
    };

    var params = this.getHashParams();
    const token: string = localStorage.getItem('token') ?? 'undefined';
    const isToken = !token.includes('undefined');
    if (!isToken) {
      localStorage.setItem('token', params.access_token);
    }
  }

  getHashParams() {
    let hashParams: any = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  changeLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('vi');
    } else {
      this.translate.use('en');
    }
  }

  login() {
    let url: string = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${this.scopes}&redirect_uri=${this.redirectUri}&show_dialog=true`;
    window.location.href = url;
  }
}
