import 'package:mobile_app/screens/home/home_screen.state.dart';
import 'package:rxdart/rxdart.dart';

class HomeScreenBloc {
  static final HomeScreenBloc _singleton = new HomeScreenBloc._internal();

  factory HomeScreenBloc() {
    return _singleton;
  }

  HomeScreenBloc._internal() {}

  final BehaviorSubject<screenState> stream =
      new BehaviorSubject<screenState>.seeded(screenState.Workout);
}
