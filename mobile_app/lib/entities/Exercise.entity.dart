import 'ExerciseSet.entity.dart';

class Exercise {
  int id;

  String name;

  bool isDone = false;

  List<ExerciseSet> sets = [ExerciseSet(), ExerciseSet(), ExerciseSet()];

  Exercise({this.id, this.name, this.sets, this.isDone});

  Exercise.example({this.id, this.name, this.isDone}) {
    sets = [ExerciseSet(), ExerciseSet(), ExerciseSet()];
    if (isDone == null) isDone = false;
  }
}
