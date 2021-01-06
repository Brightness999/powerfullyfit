import 'package:mobile_app/entities/Exercise.entity.dart';
import 'package:mobile_app/models/workout-type.enum.dart';

import 'package:json_annotation/json_annotation.dart';

part 'program.entity.g.dart';

@JsonSerializable()
class Program {
  int id;

  String name;

  Program({this.id, this.name}) {}

  factory Program.fromJson(Map<String, dynamic> json) =>
      _$ProgramFromJson(json);
  Map<String, dynamic> toJson() => _$ProgramToJson(this);
}
