import 'package:mobile_app/main_screen.state.dart';
import 'package:rxdart/rxdart.dart';

class MainScreenBloc {
  static final MainScreenBloc _singleton = new MainScreenBloc._internal();

  factory MainScreenBloc() {
    return _singleton;
  }

  MainScreenBloc._internal() {}

  final BehaviorSubject<screenState> stream =
      new BehaviorSubject<screenState>.seeded(screenState.Workout);
}
