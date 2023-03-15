import { Observable, ObservableArray } from '@nativescript/core'
import { RestaurantModel } from '../models/restaurant.model'
import { RestaurantService } from '../services/restaurant.service'

export class HomeViewModel extends Observable {
  private _restaurants: RestaurantModel[]

    constructor() {
      super()
      this.populateRestaurants()
    }

    // this will be used as the data source of our ListView
    get restaurants(): ObservableArray<RestaurantModel> {
      return new ObservableArray(this._restaurants)
    }

    populateRestaurants(): void {
      this._restaurants = RestaurantService.getInstance().getRestaurants()
    }
  }
