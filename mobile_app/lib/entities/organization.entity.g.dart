// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'organization.entity.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Organization _$OrganizationFromJson(Map<String, dynamic> json) {
  return Organization(
    id: json['id'] as int,
    name: json['name'] as String,
    createTime: json['createTime'] == null
        ? null
        : DateTime.parse(json['createTime'] as String),
  );
}

Map<String, dynamic> _$OrganizationToJson(Organization instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'createTime': instance.createTime?.toIso8601String(),
    };
