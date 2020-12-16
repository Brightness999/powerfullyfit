// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'client.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Client _$ClientFromJson(Map<String, dynamic> json) {
  return Client(
    json['id'] as int,
    json['firstname'] as String,
    json['lastname'] as String,
    coach: json['coach'] == null
        ? null
        : Coach.fromJson(json['coach'] as Map<String, dynamic>),
  )
    ..imageUrl = json['imageUrl'] as String
    ..createTime = json['createTime'] == null
        ? null
        : DateTime.parse(json['createTime'] as String);
}

Map<String, dynamic> _$ClientToJson(Client instance) => <String, dynamic>{
      'id': instance.id,
      'firstname': instance.firstname,
      'lastname': instance.lastname,
      'imageUrl': instance.imageUrl,
      'createTime': instance.createTime?.toIso8601String(),
      'coach': instance.coach,
    };
