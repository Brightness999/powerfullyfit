import 'dart:async';

import 'chat-list_event.dart';

class ChatListBloc {
  static final ChatListBloc _singleton = new ChatListBloc._internal();

  factory ChatListBloc() {
    return _singleton;
  }

  ChatListBloc._internal() {
    this.eventStream.listen((ChatListEvent event) {});
  }

  StreamController<ChatListEvent> eventController =
      new StreamController<ChatListEvent>();

  StreamSink<ChatListEvent> get eventSink => eventController.sink;
  Stream<ChatListEvent> get eventStream => eventController.stream;

  StreamController<ChatListEvent> stateController =
      new StreamController<ChatListEvent>();

  StreamSink<ChatListEvent> get stateSink => stateController.sink;
  Stream<ChatListEvent> get stateStream => stateController.stream;
}
