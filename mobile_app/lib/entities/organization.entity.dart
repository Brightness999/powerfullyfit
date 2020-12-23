import 'package:json_annotation/json_annotation.dart';

part 'organization.entity.g.dart';

@JsonSerializable()
class Organization {
  int id;
  String name;
  DateTime createTime;

  Organization({this.id, this.name, this.createTime});

  factory Organization.fromJson(Map<String, dynamic> json) =>
      _$OrganizationFromJson(json);
  Map<String, dynamic> toJson() => _$OrganizationToJson(this);
}
