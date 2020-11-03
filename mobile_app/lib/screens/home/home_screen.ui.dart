import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

import 'home_screen.state.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreen createState() => _HomeScreen();
}

class _HomeScreen extends State {
  AdvFabController mabialaFABController = AdvFabController();
  HomeScreenBloc mainScreenBloc = HomeScreenBloc();

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