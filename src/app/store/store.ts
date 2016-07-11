
export class Store {

  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  department: string;
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: string;
  localPersonalEP: string;
  localBusinessEP: string;
  distance: string;

}

interface IStoreResource extends ng.resource.IResource<Store> { }

export class StoreService {
  
  /** @ngInject */
  constructor(private $resource: ng.resource.IResourceService) {
  }
  
  getStores(): ng.resource.IResourceClass<IStoreResource> {
    return this.$resource("https://api.orange.com/poi/v1/shops", {}, { 
      query : {
        method : 'GET',
        isArray : true,
        headers : {
          "Authorization" : "Bearer Kgt7BZ4qFerw79JFqXU7pAQ1bBGH" 
        }
    }});
  }
  
}


  // livebox_assistance: false;
  // photo_espace: false;
  // pickup_service: false;
  // decoder_assistance: false;
  // fiber: false;
  // tvhd: false;
  // hplus: false;
  // type4g: false;
  // type3DTV: false;
  // type4x_payment: false;
