// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'program.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Program _$ProgramFromJson(Map<String, dynamic> json) {
  return Program(
    id: json['id'] as int,
    name: json['name'] as String,
  );
}

Map<String, dynamic> _$ProgramToJson(Program instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
    };
