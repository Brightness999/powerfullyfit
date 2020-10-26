import 'dart:async';

import 'image-upload_event.dart';

class ImageUploadBloc {
  static final ImageUploadBloc _singleton = new ImageUploadBloc._internal();

  factory ImageUploadBloc() {
    return _singleton;
  }

  ImageUploadBloc._internal() {
    this.eventStream.listen((ImageUploadEvent event) {});
  }

  StreamController<ImageUploadEvent> eventController =
      new StreamController<ImageUploadEvent>();

  StreamSink<ImageUploadEvent> get eventSink => eventController.sink;
  Stream<ImageUploadEvent> get eventStream => eventController.stream;

  StreamController<ImageUploadEvent> stateController =
      new StreamController<ImageUploadEvent>();

  StreamSink<ImageUploadEvent> get stateSink => stateController.sink;
  Stream<ImageUploadEvent> get stateStream => stateController.stream;
}
