import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private spinner: SpinnerComponent
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group(
      {
        location: ['']
      }
    );
  }

  sendToAPIXU(formValues) {
    console.log('loading data!');
    this.isLoading = true;
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
    // reset form
    this.weatherSearchForm.markAsPristine();
    this.weatherSearchForm.reset();
    this.isLoading = false;
  }

}
