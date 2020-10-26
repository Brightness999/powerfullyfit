import 'dart:async';

import 'login_events.dart';

class LoginBloc {
  static final LoginBloc _singleton = new LoginBloc._internal();

  factory LoginBloc() {
    return _singleton;
  }

  LoginBloc._internal() {
    int counter = 0;

    this.eventStream.listen((LoginEvent event) {
      stateSink.add(event);
    });
  }

  // event Pipe
  StreamController<LoginEvent> eventController =
      new StreamController<LoginEvent>();
  StreamSink<LoginEvent> get eventSink => eventController.sink;
  Stream<LoginEvent> get eventStream => eventController.stream;

  // state pipe
  StreamController<LoginEvent> stateController =
      new StreamController<LoginEvent>();

  StreamSink<LoginEvent> get stateSink => stateController.sink;
  Stream<LoginEvent> get stateStream => stateController.stream;
}
