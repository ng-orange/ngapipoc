class NavbarController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

export const Navbar = {
  templateUrl: 'app/components/Navbar.html',
  controller: NavbarController
};

