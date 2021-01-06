// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'Exercise.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Exercise _$ExerciseFromJson(Map<String, dynamic> json) {
  return Exercise(
    id: json['id'] as int,
    name: json['name'] as String,
    sets: json['sets'] as int,
    isDone: json['isDone'] as bool,
  );
}

Map<String, dynamic> _$ExerciseToJson(Exercise instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'isDone': instance.isDone,
      'sets': instance.sets,
    };
