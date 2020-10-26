import 'dart:async';

import 'program_event.dart';

class ProgramBloc {
  static final ProgramBloc _singleton = new ProgramBloc._internal();

  factory ProgramBloc() {
    return _singleton;
  }

  ProgramBloc._internal() {
    this.eventStream.listen((ProgramEvent event) {});
  }

  StreamController<ProgramEvent> eventController =
      new StreamController<ProgramEvent>();

  StreamSink<ProgramEvent> get eventSink => eventController.sink;
  Stream<ProgramEvent> get eventStream => eventController.stream;

  StreamController<ProgramEvent> stateController =
      new StreamController<ProgramEvent>();

  StreamSink<ProgramEvent> get stateSink => stateController.sink;
  Stream<ProgramEvent> get stateStream => stateController.stream;
}
