import 'package:json_annotation/json_annotation.dart';

class User {
  int id;
  String firstname;
  String lastname;
  String imageUrl;
  DateTime createTime;

  User({
    this.id,
    this.firstname,
    this.lastname,
    this.imageUrl,
  });
}
