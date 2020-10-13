import 'dart:async';

import 'invitation_events.dart';

class InvitationBloc {
  static final InvitationBloc _singleton = new InvitationBloc._internal();

  factory InvitationBloc() {
    return _singleton;
  }

  InvitationBloc._internal() {
    this.eventStream.listen((InvitationEvent event) {
      stateSink.add(event);
    });
  }

  // state pipe
  StreamController<InvitationEvent> stateController = new StreamController();
  StreamSink<InvitationEvent> get stateSink => stateController.sink;
  Stream<InvitationEvent> get stateStream => stateController.stream;

  // event Pipe
  StreamController<InvitationEvent> eventController =
      new StreamController<InvitationEvent>();
  StreamSink<InvitationEvent> get eventSink => eventController.sink;
  Stream<InvitationEvent> get eventStream => eventController.stream;
}
