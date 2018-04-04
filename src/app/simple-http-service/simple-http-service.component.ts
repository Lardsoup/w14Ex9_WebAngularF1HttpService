import { Component, OnInit } from '@angular/core';
import { Idriver } from '../Idriver';
import { F1SimpleServicerService } from '../f1-simple-servicer.service';

@Component({
	selector: 'app-simple-http-service',
	templateUrl: './simple-http-service.component.html',
	styleUrls: ['./simple-http-service.component.css']
})
export class SimpleHttpServiceComponent implements OnInit 
{
	drivers:Idriver[];

	constructor(F1service:F1SimpleServicerService) 
	{ 
		F1service.getDrivers().subscribe(response => this.drivers = response.json().MRData.DriverTable.Drivers);
	}

	ngOnInit() 
	{

	}

}
