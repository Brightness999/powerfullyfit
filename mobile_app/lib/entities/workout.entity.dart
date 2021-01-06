import 'package:mobile_app/entities/Exercise.entity.dart';
import 'package:mobile_app/models/workout-type.enum.dart';

import 'package:json_annotation/json_annotation.dart';

part 'workout.entity.g.dart';

@JsonSerializable()
class Workout {
  int id;

  String name;
  WorkoutType type;
  String duration;
  String picture;
  String status;

  List<Exercise> exercises;

  Workout({
    this.name,
    this.type,
    this.duration,
    this.picture,
    this.exercises,
    this.status,
  }) {
    this.picture = 'assets/images/today-workout-alt.jpeg';
  }

  factory Workout.fromJson(Map<String, dynamic> json) =>
      _$WorkoutFromJson(json);
  Map<String, dynamic> toJson() => _$WorkoutToJson(this);
}
