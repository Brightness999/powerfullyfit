import 'package:mobile_app/entities/client.entity.dart';
import 'package:mobile_app/repositories/backend.proxy.dart';

class UserRepository {
  static String segment = '/user';

  static Stream<Client> getUserById(int userId,
      {List<String> relations}) async* {
    print(relations);

    yield Client.fromJson(await BackendProxy.get(
        UserRepository.segment + '/clients/' + userId.toString()));
  }
}
