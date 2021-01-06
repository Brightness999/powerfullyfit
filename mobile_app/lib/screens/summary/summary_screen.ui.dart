import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';

import 'package:mobile_app/repositories/user.repository.dart';
import 'package:mobile_app/screens/account/account_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/nutrition/daily-nutrition/daily-nutrition.ui.dart';
import 'package:mobile_app/widgets/cards/weekly-goals.card.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:mobile_app/widgets/cards/calendar.card.dart';
import 'package:mobile_app/widgets/cards/today-workout.card.dart';
import 'package:table_calendar/table_calendar.dart';

class SummaryScreen extends StatefulWidget {
  @override
  _SummaryScreen createState() => _SummaryScreen();
}

class _SummaryScreen extends State {
  AdvFabController mabialaFABController = AdvFabController();
  CalendarController calendarController = CalendarController();

  HomeScreenBloc mainScreenBloc = HomeScreenBloc();
  UserRepository userRepository;

  int weeklyWorkouts = 2;
  int reachedMacrosMilestone = 4;

  @override
  initState() {
    super.initState();

    UserRepository.getUserById(1).listen((client) {
      print(client.toJson());
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: ListView(
          // crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flexible(
                  child: Container(
                    width: MediaQuery.of(context).size.width * .8,
                    child: Text(
                      "Take a look at your fitness Summary.",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 28,
                      ),
                    ),
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (BuildContext context) {
                          return AccountScreen();
                        },
                      ),
                    );
                  },
                  child: Container(
                    height: MediaQuery.of(context).size.width * .12,
                    width: MediaQuery.of(context).size.width * .12,
                    decoration: new BoxDecoration(
                      shape: BoxShape.circle,
                      image: DecorationImage(
                        fit: BoxFit.fill,
                        image: NetworkImage(
                          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhbz.h-cdn.co%2Fassets%2F16%2F43%2Fhbz-dark-blonde-hair-magdalena-frackowiak.jpg%3Fcrop%3D1.0xw%3A1xh%3Bcenter%2Ctop%26resize%3D768%3A*&f=1&nofb=1',
                        ),
                      ),
                    ),
                  ),
                )
              ],
            ),
            SizedBox(
              height: 40,
            ),
            WeeklyGoals(),
            SizedBox(
              height: 20,
            ),
            CalendarCard(
              calendarController: calendarController,
            ),
            SizedBox(
              height: 20,
            ),
            DailyNutrition(
              title: "Your Progress",
              child: GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (BuildContext context) {
                        return DailyNutritionScreen();
                      },
                    ),
                  );
                },
                child: Container(
                  margin: EdgeInsets.only(
                    top: MediaQuery.of(context).size.height * .03,
                  ),
                  child: Center(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "See Overall Progress",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 17,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            TodayWorkoutCard(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) {
                      return WorkoutScreen();
                    },
                  ),
                );
              },
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * .1,
            ),
          ],
        ),
      ),
    );
  }
}
