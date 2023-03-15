import { fromObject } from '@nativescript/core'
import { Observable, ObservableArray } from '@nativescript/core'
import { RestaurantModel } from '../restaurants'
import { Restaurant } from '../restaurants'

import { SelectedPageService } from '../shared/selected-page-service'

export function HomeViewModel() {
  SelectedPageService.getInstance().updateSelectedPage('Home')

  const viewModel = fromObject({
    /* Add your view model properties here */
  })

  return viewModel
}

// Add the contents of HomeViewModel class
export class HomeViewModel extends Observable {
  private _flicks: RestaurantModel[]

  constructor() {
    super()
    this.populateFlicks()
  }

  // this will be used as the data source of our ListView
  get flicks(): ObservableArray<RestaurantModel> {
    return new ObservableArray(this._flicks)
  }

  populateFlicks(): void {
    this._flicks = FlickService.getInstance().getFlicks()
  }
}
