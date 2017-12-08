import { SocialNetwork } from './social-network';

class App implements SocialNetwork {
  title = "Eggheads";

  getUsers() {
    return [{ name: "John" }];
  }
}
