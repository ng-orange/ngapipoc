import {Store, StoreService} from './store';

class StoresController {
  text: string;
  stores:Store[] = [];

  // search criteria 
  city:string;
  postalCode:string;
  
  offset:number;
  limit:number;

  constructor(private storeService:StoreService) {
    this.text = 'orange store research';
  }
  
  handleSearch() {

    const criteria = { city : null, postalCode : null};
    
    if (angular.isDefined(this.city)) {
      criteria.city = this.city;
    }
    if (angular.isDefined(this.postalCode)) {
      criteria.postalCode = this.postalCode;
    }
    this.storeService.getStores().query(criteria, (data:Store[]) => {
      this.stores = data;
    });
  }
  
}

export const stores = {
  templateUrl: 'app/store/Stores.html',
  controller: StoresController
};

