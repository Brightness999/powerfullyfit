import 'package:mobile_app/entities/user.entity.dart';

import 'client.entity.dart';

class Coach extends User {
  int id;

  String name;

  List<Client> clients;
}
