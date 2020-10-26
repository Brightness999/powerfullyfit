import 'dart:async';
import 'exercise_event.dart';

class ExerciseBloc {
  static final ExerciseBloc _singleton = new ExerciseBloc._internal();

  factory ExerciseBloc() {
    return _singleton;
  }

  ExerciseBloc._internal() {
    this.eventStream.listen((ExerciseEvent event) {});
  }

  StreamController<ExerciseEvent> eventController =
      new StreamController<ExerciseEvent>();

  StreamSink<ExerciseEvent> get eventSink => eventController.sink;
  Stream<ExerciseEvent> get eventStream => eventController.stream;

  StreamController<ExerciseEvent> stateController =
      new StreamController<ExerciseEvent>();

  StreamSink<ExerciseEvent> get stateSink => stateController.sink;
  Stream<ExerciseEvent> get stateStream => stateController.stream;
}
