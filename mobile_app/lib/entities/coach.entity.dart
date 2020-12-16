import 'package:mobile_app/entities/organization.entity.dart';
import 'package:mobile_app/entities/user.entity.dart';

import 'client.entity.dart';
import 'package:json_annotation/json_annotation.dart';

part 'coach.entity.g.dart';

@JsonSerializable()
class Coach extends User {
  String role;
  List<Client> clients;
  Organization organization;

  Coach({this.role, this.clients, this.organization});

  factory Coach.fromJson(Map<String, dynamic> json) => _$CoachFromJson(json);
  Map<String, dynamic> toJson() => _$CoachToJson(this);
}
