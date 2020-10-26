import 'dart:async';

import 'edit-profile_event.dart';

class UserProfileBloc {
  static final UserProfileBloc _singleton = new UserProfileBloc._internal();

  factory UserProfileBloc() {
    return _singleton;
  }

  UserProfileBloc._internal() {
    this.eventStream.listen((UserProfileEvent event) {});
  }

  StreamController<UserProfileEvent> eventController =
      new StreamController<UserProfileEvent>();

  StreamSink<UserProfileEvent> get eventSink => eventController.sink;
  Stream<UserProfileEvent> get eventStream => eventController.stream;

  StreamController<UserProfileEvent> stateController =
      new StreamController<UserProfileEvent>();

  StreamSink<UserProfileEvent> get stateSink => stateController.sink;
  Stream<UserProfileEvent> get stateStream => stateController.stream;
}
