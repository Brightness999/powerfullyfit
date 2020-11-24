import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

class AccountScreen extends StatefulWidget {
  @override
  _AccountScreen createState() => _AccountScreen();
}

class _AccountScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Row(
            children: [
              Text(
                'Your Account',
              ),
            ],
          )
        ],
      ),
    );
  }
}
