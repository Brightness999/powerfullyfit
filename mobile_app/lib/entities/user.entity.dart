import 'package:json_annotation/json_annotation.dart';
import 'package:mobile_app/entities/organization.entity.dart';

class User {
  int id;
  String firstname;
  String lastname;
  String imageUrl;
  DateTime createTime;
  Organization organization;

  User(
      {this.id,
      this.firstname,
      this.lastname,
      this.imageUrl,
      this.organization});
}
