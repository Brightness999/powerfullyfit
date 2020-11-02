import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobile_app/main_screen.bloc.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/community-board/post/post_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/messaging/chat-list/chat-list_ui.dart';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/screens/user-management/edit-profile/edit-profile_ui.dart';
import 'package:mobile_app/screens/user-management/image-upload/image-upload_ui.dart';
import 'package:mobile_app/screens/user-management/user-screen/user-screen_ui.dart';
import 'package:mobile_app/screens/workout/exercise/exercise_ui.dart';
import 'package:mobile_app/screens/workout/program/program_ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/appbar/appbar.dart';
import 'package:mobile_app/widgets/menu/menu-item.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

import 'main_screen.state.dart';
import 'screens/auth/login/login_ui.dart';

import 'package:adv_fab/adv_fab.dart';

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
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  AdvFabController mabialaFABController = AdvFabController();
  MainScreenBloc mainScreenBloc = MainScreenBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder(
        stream: mainScreenBloc.stream,
        builder: (BuildContext context, AsyncSnapshot<screenState> snapshot) {
          if (snapshot.data == screenState.Login) return LoginScreen();
          if (snapshot.data == screenState.Workout) return WorkoutScreen();
          if (snapshot.data == screenState.Education) return EducationScreen();
          if (snapshot.data == screenState.CommunityBoard) return BoardScreen();
          return EducationScreen();
        },
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: AppMenu(
        mabialaFABController: mabialaFABController,
        stateStream: mainScreenBloc.stream,
      ),
    );
  }
}
