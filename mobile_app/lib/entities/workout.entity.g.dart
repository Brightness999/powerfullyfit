// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'workout.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Workout _$WorkoutFromJson(Map<String, dynamic> json) {
  return Workout(
    name: json['name'] as String,
    type: _$enumDecodeNullable(_$WorkoutTypeEnumMap, json['type']),
    duration: json['duration'] as String,
    picture: json['picture'] as String,
    exercises: (json['exercises'] as List)
        ?.map((e) =>
            e == null ? null : Exercise.fromJson(e as Map<String, dynamic>))
        ?.toList(),
    status: json['status'] as String,
  )..id = json['id'] as int;
}

Map<String, dynamic> _$WorkoutToJson(Workout instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': _$WorkoutTypeEnumMap[instance.type],
      'duration': instance.duration,
      'picture': instance.picture,
      'status': instance.status,
      'exercises': instance.exercises,
    };

T _$enumDecode<T>(
  Map<T, dynamic> enumValues,
  dynamic source, {
  T unknownValue,
}) {
  if (source == null) {
    throw ArgumentError('A value must be provided. Supported values: '
        '${enumValues.values.join(', ')}');
  }

  final value = enumValues.entries
      .singleWhere((e) => e.value == source, orElse: () => null)
      ?.key;

  if (value == null && unknownValue == null) {
    throw ArgumentError('`$source` is not one of the supported values: '
        '${enumValues.values.join(', ')}');
  }
  return value ?? unknownValue;
}

T _$enumDecodeNullable<T>(
  Map<T, dynamic> enumValues,
  dynamic source, {
  T unknownValue,
}) {
  if (source == null) {
    return null;
  }
  return _$enumDecode<T>(enumValues, source, unknownValue: unknownValue);
}

const _$WorkoutTypeEnumMap = {
  WorkoutType.HIIT: 'HIIT',
};
