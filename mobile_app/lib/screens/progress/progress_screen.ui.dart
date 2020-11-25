import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/account/account_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/nutrition/daily-nutrition/daily-nutrition.ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:mobile_app/widgets/cards/calendar.card.dart';
import 'package:mobile_app/widgets/cards/today-workout.card.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:table_calendar/table_calendar.dart';

class ProgressScreen extends StatefulWidget {
  @override
  _ProgressScreen createState() => _ProgressScreen();
}

class _ProgressScreen extends State {
  AdvFabController mabialaFABController = AdvFabController();
  CalendarController calendarController = CalendarController();

  HomeScreenBloc mainScreenBloc = HomeScreenBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            vertical: MediaQuery.of(context).size.height * .05,
            horizontal: MediaQuery.of(context).size.width * .03,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    child: Container(
                      width: MediaQuery.of(context).size.width * .6,
                      child: Text(
                        "Take a look at your fitness Summary.",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                        ),
                      ),
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (BuildContext context) {
                          return AccountScreen();
                        }),
                      );
                    },
                    child: Container(
                      height: MediaQuery.of(context).size.width * .15,
                      width: MediaQuery.of(context).size.width * .15,
                      decoration: new BoxDecoration(
                          shape: BoxShape.circle,
                          image: DecorationImage(
                            fit: BoxFit.fill,
                            image: NetworkImage(
                              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhbz.h-cdn.co%2Fassets%2F16%2F43%2Fhbz-dark-blonde-hair-magdalena-frackowiak.jpg%3Fcrop%3D1.0xw%3A1xh%3Bcenter%2Ctop%26resize%3D768%3A*&f=1&nofb=1',
                            ),
                          )),
                    ),
                  )
                ],
              ),
              Container(
                margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .01,
                  top: MediaQuery.of(context).size.height * .03,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "My Weekly Goals",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: MediaQuery.of(context).size.height * .23,
                      padding: EdgeInsets.all(
                        MediaQuery.of(context).size.height * .02,
                      ),
                      decoration: BoxDecoration(
                        color: Color(0xff22272c),
                        borderRadius: BorderRadius.all(
                          Radius.circular(25),
                        ),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                "Weekly Workouts (2/4)",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 17,
                                ),
                              ),
                              Icon(
                                Icons.keyboard_arrow_down,
                                color: Colors.white,
                              )
                            ],
                          ),
                          StepProgressIndicator(
                            totalSteps: 4,
                            currentStep: 2,
                            size: 36,
                            selectedColor: Colors.black,
                            unselectedColor: Colors.grey[200],
                            customStep: (index, color, _) =>
                                color == Colors.black
                                    ? Container(
                                        child: Icon(
                                          Icons.check_circle,
                                          color: Colors.greenAccent,
                                        ),
                                      )
                                    : Container(
                                        child: Icon(
                                          Icons.stop_circle,
                                          color: Colors.blueAccent,
                                        ),
                                      ),
                          ),
                          Text(
                            "Macros milestone reached (4/5)",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 17,
                            ),
                          ),
                          StepProgressIndicator(
                            totalSteps: 5,
                            currentStep: 4,
                            size: 36,
                            selectedColor: Colors.black,
                            unselectedColor: Colors.grey[200],
                            customStep: (index, color, _) =>
                                color == Colors.black
                                    ? Container(
                                        child: Icon(
                                          Icons.check_circle,
                                          color: Colors.greenAccent,
                                        ),
                                      )
                                    : Container(
                                        child: Icon(
                                          Icons.stop_circle,
                                          color: Colors.blueAccent,
                                        ),
                                      ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              CalendarCard(
                calendarController: calendarController,
              ),
              DailyNutrition(
                title: "Your Progress",
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (BuildContext context) {
                        return DailyNutritionScreen();
                      }),
                    );
                  },
                  child: Container(
                    margin: EdgeInsets.only(
                      top: MediaQuery.of(context).size.height * .03,
                    ),
                    child: Center(
                      child: Text(
                        "See Overall Progress",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                        ),
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
                    MaterialPageRoute(builder: (BuildContext context) {
                      return WorkoutScreen();
                    }),
                  );
                },
              ),
              SizedBox(
                height: MediaQuery.of(context).size.height * .1,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
