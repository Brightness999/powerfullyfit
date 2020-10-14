import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/user-management/edit-profile/edit-profile_ui.dart';
import 'package:mobile_app/screens/workout/exercise/exercise_ui.dart';
import 'package:mobile_app/screens/workout/program/program_ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';

import 'screens/auth/login/login_ui.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'WL',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: BoardScreen());
  }
}
