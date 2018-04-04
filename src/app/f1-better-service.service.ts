import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Idriver } from './Idriver';
import 'rxjs/add/operator/map';

@Injectable()
export class F1BetterServiceService 
{
	private request$:Observable<Idriver[]>

	constructor(http:Http) 
	{ 
		this.request$ = http.get('http://ergast.com/api/f1/2017/drivers.json')
		.map(response => response.json().MRData.DriverTable.Drivers)
	}

	public getDrivers(): Observable<Idriver[]>
	{
		return this.request$;
	}
}
