import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

class SummaryScreen extends StatefulWidget {
  @override
  _SummaryScreen createState() => _SummaryScreen();
}

class _SummaryScreen extends State {
  AdvFabController mabialaFABController = AdvFabController();
  HomeScreenBloc mainScreenBloc = HomeScreenBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.symmetric(
          vertical: MediaQuery.of(context).size.height * .05,
          horizontal: MediaQuery.of(context).size.width * .05,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Welcome!",
              style: TextStyle(
                color: Colors.white,
                fontSize: 28,
              ),
            ),
            Text(
              "Take a look at your fitness summary.",
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: Colors.white,
                fontSize: 28,
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(
                vertical: MediaQuery.of(context).size.height * .05,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "My Weekly Goals",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(
                      MediaQuery.of(context).size.height * .02,
                    ),
                    decoration: BoxDecoration(color: Colors.grey),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Weekly Workouts (2/4)",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        Text(
                          "Macros milestone reached",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Container(
              margin: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * .05,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: EdgeInsets.all(
                      MediaQuery.of(context).size.height * .02,
                    ),
                    decoration: BoxDecoration(color: Colors.grey),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [],
                    ),
                  ),
                ],
              ),
            ),
            Container(
              margin: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * .05,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Your Progress",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(
                      MediaQuery.of(context).size.height * .02,
                    ),
                    decoration: BoxDecoration(color: Colors.grey),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Your Daily Nutrition Goal",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 15,
                          ),
                        ),
                        Center(
                          child: Text(
                            "Macros milestone reached",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 15,
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (BuildContext context) {
                    return WorkoutScreen();
                  }),
                );
              },
              child: Container(
                margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .05,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Today's Workout",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20,
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(
                        MediaQuery.of(context).size.height * .02,
                      ),
                      decoration: BoxDecoration(color: Colors.grey),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [],
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
