import 'dart:io';

class BackendProxy {
  String get localhost {
    if (Platform.isAndroid) return 'http://10.0.2.2:3000';

    return 'http://localhost:3000';
  }
}
