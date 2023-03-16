import { Observable } from '@nativescript/core'
import { RestaurantModel } from '../models/restaurant.model'
import { RestaurantService } from '../services/restaurant.service'

export class DetailsViewModel extends Observable {
  private _restaurant: RestaurantModel

    constructor(private _context: { restaurantId: number }) {
      super()

      this._restaurant = RestaurantService.getInstance().getRestaurantById(this._context.restaurantId)
    }

    // this will be used as the data source of our ListView
    get restaurant(): RestaurantModel {
      return this._restaurant
    }
  }
