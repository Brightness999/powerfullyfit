import 'package:json_annotation/json_annotation.dart';

part 'Exercise.entity.g.dart';

@JsonSerializable()
class Exercise {
  int id;

  String name;

  bool isDone = false;

  int sets = 3;

  Exercise({this.id, this.name, this.sets, this.isDone});

  Exercise.example({this.id, this.name, this.isDone}) {
    if (isDone == null) isDone = false;
  }

  factory Exercise.fromJson(Map<String, dynamic> json) =>
      _$ExerciseFromJson(json);
  Map<String, dynamic> toJson() => _$ExerciseToJson(this);
}
