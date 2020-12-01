import 'package:mobile_app/models/workout-type.enum.dart';

class Workout {
  int id;

  String name;
  WorkoutType type;

  Workout({this.name, this.type});
}
