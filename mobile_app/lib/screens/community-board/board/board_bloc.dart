import 'dart:async';

import 'board_event.dart';

class BoardBloc {
  static final BoardBloc _singleton = new BoardBloc._internal();

  factory BoardBloc() {
    return _singleton;
  }

  BoardBloc._internal() {
    this.eventStream.listen((BoardEvent event) {});
  }

  StreamController<BoardEvent> eventController =
      new StreamController<BoardEvent>();

  StreamSink<BoardEvent> get eventSink => eventController.sink;
  Stream<BoardEvent> get eventStream => eventController.stream;

  StreamController<BoardEvent> stateController =
      new StreamController<BoardEvent>();

  StreamSink<BoardEvent> get stateSink => stateController.sink;
  Stream<BoardEvent> get stateStream => stateController.stream;
}
