import { Component, OnInit } from '@angular/core';
import { F1BetterServiceService } from '../f1-better-service.service';
import { Idriver } from '../Idriver';

@Component({
	selector: 'app-better-http-service',
	templateUrl: './better-http-service.component.html',
	styleUrls: ['./better-http-service.component.css'],
	providers: [F1BetterServiceService]
})
export class BetterHttpServiceComponent implements OnInit 
{
	drivers: Idriver[];

	constructor(F1Service: F1BetterServiceService) 
	{
		F1Service.getDrivers().subscribe(response => this.drivers = response);
	}

	ngOnInit() {
	}

}
