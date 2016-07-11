class MyComponentController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const myComponent = {
  templateUrl: 'app/gdfa/myComponent.html',
  controller: MyComponentController
};

