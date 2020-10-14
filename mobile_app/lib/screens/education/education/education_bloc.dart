import 'dart:async';

import 'package:mobile_app/screens/education/education/education_event.dart';

class EducationBloc {
  static final EducationBloc _singleton = new EducationBloc._internal();

  factory EducationBloc() {
    return _singleton;
  }

  EducationBloc._internal() {
    this.eventStream.listen((EducationEvent event) {});
  }

  StreamController<EducationEvent> eventController =
      new StreamController<EducationEvent>();

  StreamSink<EducationEvent> get eventSink => eventController.sink;
  Stream<EducationEvent> get eventStream => eventController.stream;

  StreamController<EducationEvent> stateController =
      new StreamController<EducationEvent>();

  StreamSink<EducationEvent> get stateSink => stateController.sink;
  Stream<EducationEvent> get stateStream => stateController.stream;
}
