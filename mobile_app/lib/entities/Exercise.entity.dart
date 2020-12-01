import 'ExerciseSet.entity.dart';

class Exercise {
  int id;

  String name;

  List<ExerciseSet> sets = [ExerciseSet(), ExerciseSet(), ExerciseSet()];

  Exercise({this.id, this.name, this.sets});
}
