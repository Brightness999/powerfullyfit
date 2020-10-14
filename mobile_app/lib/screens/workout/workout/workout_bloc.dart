import 'dart:async';
import 'workout_event.dart';

class WorkoutBloc {
  static final WorkoutBloc _singleton = new WorkoutBloc._internal();

  factory WorkoutBloc() {
    return _singleton;
  }

  WorkoutBloc._internal() {
    this.eventStream.listen((WorkoutEvent event) {});
  }

  StreamController<WorkoutEvent> eventController =
      new StreamController<WorkoutEvent>();

  StreamSink<WorkoutEvent> get eventSink => eventController.sink;
  Stream<WorkoutEvent> get eventStream => eventController.stream;

  StreamController<WorkoutEvent> stateController =
      new StreamController<WorkoutEvent>();

  StreamSink<WorkoutEvent> get stateSink => stateController.sink;
  Stream<WorkoutEvent> get stateStream => stateController.stream;
}
