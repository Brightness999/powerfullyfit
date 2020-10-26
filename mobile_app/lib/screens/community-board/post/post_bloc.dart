import 'dart:async';

import 'post_event.dart';

class PostBloc {
  static final PostBloc _singleton = new PostBloc._internal();

  factory PostBloc() {
    return _singleton;
  }

  PostBloc._internal() {
    this.eventStream.listen((PostEvent event) {});
  }

  StreamController<PostEvent> eventController =
      new StreamController<PostEvent>();

  StreamSink<PostEvent> get eventSink => eventController.sink;
  Stream<PostEvent> get eventStream => eventController.stream;

  StreamController<PostEvent> stateController =
      new StreamController<PostEvent>();

  StreamSink<PostEvent> get stateSink => stateController.sink;
  Stream<PostEvent> get stateStream => stateController.stream;
}
