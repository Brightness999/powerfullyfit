import 'package:mobile_app/entities/client.entity.dart';
import 'package:mobile_app/entities/user.entity.dart';
import 'package:mobile_app/models/login.model.dart';

import 'backend.proxy.dart';

class AuthRepository {
  static String segment = '/auth';

  static Stream<Client> login(Login login, {List<String> relations}) async* {
    print(login);

    yield Client.fromJson(await BackendProxy.post(
        AuthRepository.segment + '/login',
        {'username': login.username, 'password': login.password}));
  }
}
