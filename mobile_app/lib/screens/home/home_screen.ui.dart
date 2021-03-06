import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/help/help_screen.ui.dart';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/screens/nutrition/daily-nutrition/daily-nutrition.ui.dart';
import 'package:mobile_app/screens/progress/overall-progress/overall_progress_screen.ui.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout-list/workout-list_ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

import 'home_screen.state.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreen createState() => _HomeScreen();
}

AdvFabController mabialaFABController = AdvFabController();
HomeScreenBloc mainScreenBloc = HomeScreenBloc();

class _HomeScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          GestureDetector(
            onTap: () => mabialaFABController.isCollapsed
                ? null
                : mabialaFABController.collapseFAB(),
            child: StreamBuilder(
              stream: mainScreenBloc.stream,
              builder:
                  (BuildContext context, AsyncSnapshot<screenState> snapshot) {
                if (snapshot.data == screenState.Login) return LoginScreen();
                if (snapshot.data == screenState.Inbox) return ChatScreen();
                if (snapshot.data == screenState.Workout)
                  return WorkoutScreen();
                if (snapshot.data == screenState.WorkoutList)
                  return WorkoutListScreen();
                if (snapshot.data == screenState.Progress)
                  return OverallProgressScreen();
                if (snapshot.data == screenState.Education)
                  return EducationScreen();
                if (snapshot.data == screenState.CommunityBoard)
                  return BoardScreen();
                if (snapshot.data == screenState.Summary)
                  return SummaryScreen();
                if (snapshot.data == screenState.Help) return HelpScreen();
                if (snapshot.data == screenState.Nutrition)
                  return DailyNutritionScreen();
                return SummaryScreen();
              },
            ),
          ),
        ],
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: AppMenu(
        mabialaFABController: mabialaFABController,
        stateStream: mainScreenBloc.stream,
      ),
    );
  }
}
