import 'dart:async';

import './login_events.dart';

class LoginBloc {
  static final LoginBloc _singleton = new LoginBloc._internal();

  factory LoginBloc() {
    return _singleton;
  }

  LoginBloc._internal() {
    int counter = 0;

    this.eventStream.listen((LoginEvent event) {
      stateSink.add(counter++);
    });
  }

  // event Pipe
  StreamController<LoginEvent> eventController =
      new StreamController<LoginEvent>();
  StreamSink<LoginEvent> get eventSink => eventController.sink;
  Stream<LoginEvent> get eventStream => eventController.stream;

  // state pipe
  StreamController<int> stateController = new StreamController<int>();

  StreamSink<int> get stateSink => stateController.sink;
  Stream<int> get stateStream => stateController.stream;
}
