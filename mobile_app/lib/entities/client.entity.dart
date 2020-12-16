import 'package:mobile_app/entities/coach.entity.dart';
import 'package:mobile_app/entities/user.entity.dart';
import 'package:json_annotation/json_annotation.dart';

part 'client.entity.g.dart';

@JsonSerializable()
class Client extends User {
  Coach coach;

  Client(int id, String firstname, String lastname, {this.coach})
      : super(id: id, firstname: firstname, lastname: lastname);

  factory Client.fromJson(Map<String, dynamic> json) => _$ClientFromJson(json);
  Map<String, dynamic> toJson() => _$ClientToJson(this);
}
