import { Frame, Observable, ObservableArray, ItemEventData } from '@nativescript/core'
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

      onRestaurantTap(args: ItemEventData): void {
        Frame.topmost().navigate({
          moduleName: 'details/details-page',
          context: { restaurantId: this._restaurants[args.index].id }
        })
      }
  }
