// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'coach.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Coach _$CoachFromJson(Map<String, dynamic> json) {
  return Coach(
    role: json['role'] as String,
    clients: (json['clients'] as List)
        ?.map((e) =>
            e == null ? null : Client.fromJson(e as Map<String, dynamic>))
        ?.toList(),
    organization: json['organization'] == null
        ? null
        : Organization.fromJson(json['organization'] as Map<String, dynamic>),
  )
    ..id = json['id'] as int
    ..firstname = json['firstname'] as String
    ..lastname = json['lastname'] as String
    ..imageUrl = json['imageUrl'] as String
    ..createTime = json['createTime'] == null
        ? null
        : DateTime.parse(json['createTime'] as String);
}

Map<String, dynamic> _$CoachToJson(Coach instance) => <String, dynamic>{
      'id': instance.id,
      'firstname': instance.firstname,
      'lastname': instance.lastname,
      'imageUrl': instance.imageUrl,
      'createTime': instance.createTime?.toIso8601String(),
      'role': instance.role,
      'clients': instance.clients,
      'organization': instance.organization,
    };
