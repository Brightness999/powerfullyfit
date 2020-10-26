import 'dart:async';

import 'message_event.dart';

class MessageBloc {
  static final MessageBloc _singleton = new MessageBloc._internal();

  factory MessageBloc() {
    return _singleton;
  }

  MessageBloc._internal() {
    this.eventStream.listen((MessageEvent event) {});
  }

  StreamController<MessageEvent> eventController =
      new StreamController<MessageEvent>();

  StreamSink<MessageEvent> get eventSink => eventController.sink;
  Stream<MessageEvent> get eventStream => eventController.stream;

  StreamController<MessageEvent> stateController =
      new StreamController<MessageEvent>();

  StreamSink<MessageEvent> get stateSink => stateController.sink;
  Stream<MessageEvent> get stateStream => stateController.stream;
}
