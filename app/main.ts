import {HTTP_PROVIDERS } from 'angular2/http';
import {Component, Injectable} from 'angular2/core';
import {LittleKittyService} from 'ng2-little-kitty/ng2-little-kitty';

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	LittleKittyService
]);