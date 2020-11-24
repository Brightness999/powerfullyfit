import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/account/account_screen.ui.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/nutrition/daily-nutrition/daily-nutrition.ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:table_calendar/table_calendar.dart';

class SummaryScreen extends StatefulWidget {
  @override
  _SummaryScreen createState() => _SummaryScreen();
}

class _SummaryScreen extends State {
  AdvFabController mabialaFABController = AdvFabController();
  CalendarController _calendarController = CalendarController();

  HomeScreenBloc mainScreenBloc = HomeScreenBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            vertical: MediaQuery.of(context).size.height * .05,
            horizontal: MediaQuery.of(context).size.width * .05,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    child: Text(
                      "Take a look at fitness Summary",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 28,
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
                      height: 50,
                      width: 50,
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
                margin: EdgeInsets.symmetric(
                  vertical: MediaQuery.of(context).size.height * .03,
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
                      height: 20,
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
              Container(
                margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .03,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        color: Color(0xff22272c),
                        borderRadius: BorderRadius.all(
                          Radius.circular(25),
                        ),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          TableCalendar(
                            calendarController: _calendarController,
                            calendarStyle: CalendarStyle(
                              weekdayStyle: TextStyle(
                                color: Colors.white,
                              ),
                              selectedColor: Color(0xff99755A),
                            ),
                            headerStyle: HeaderStyle(
                              formatButtonTextStyle: TextStyle(
                                color: Colors.white,
                              ),
                              titleTextStyle: TextStyle(
                                color: Colors.white,
                              ),
                            ),
                            initialCalendarFormat: CalendarFormat.week,
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
                    Text(
                      "Your Progress",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Container(
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
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Your Daily Nutrition Goal",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 17,
                            ),
                          ),
                          SizedBox(
                            height: 20,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Column(
                                children: [
                                  Text(
                                    "Calories",
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 15,
                                    ),
                                  ),
                                  SizedBox(
                                    height: 15,
                                  ),
                                  CircularStepProgressIndicator(
                                    totalSteps: 100,
                                    currentStep: 72,
                                    selectedColor: Colors.redAccent,
                                    unselectedColor: Colors.grey[200],
                                    padding: 0,
                                    height: MediaQuery.of(context).size.height *
                                        .09,
                                    width: MediaQuery.of(context).size.height *
                                        .09,
                                    stepSize: 9,
                                    roundedCap: (_, __) => true,
                                    child: Center(
                                      child: Text(
                                        "1586",
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 15,
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              Column(
                                children: [
                                  Text(
                                    "Protein",
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 15,
                                    ),
                                  ),
                                  SizedBox(
                                    height: 15,
                                  ),
                                  CircularStepProgressIndicator(
                                    totalSteps: 100,
                                    currentStep: 72,
                                    selectedColor: Colors.greenAccent,
                                    unselectedColor: Colors.grey[200],
                                    padding: 0,
                                    height: MediaQuery.of(context).size.height *
                                        .09,
                                    width: MediaQuery.of(context).size.height *
                                        .09,
                                    stepSize: 9,
                                    roundedCap: (_, __) => true,
                                    child: Center(
                                      child: Text(
                                        "1586",
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 15,
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              Column(
                                children: [
                                  Text(
                                    "Carbs",
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 15,
                                    ),
                                  ),
                                  SizedBox(
                                    height: 15,
                                  ),
                                  CircularStepProgressIndicator(
                                    totalSteps: 100,
                                    currentStep: 72,
                                    selectedColor: Color(0Xff99755A),
                                    unselectedColor: Colors.grey[200],
                                    padding: 0,
                                    height: MediaQuery.of(context).size.height *
                                        .09,
                                    width: MediaQuery.of(context).size.height *
                                        .09,
                                    child: Center(
                                      child: Text(
                                        "1586",
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 15,
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              Column(
                                children: [
                                  Text(
                                    "Fat",
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 15,
                                    ),
                                  ),
                                  SizedBox(
                                    height: 15,
                                  ),
                                  CircularStepProgressIndicator(
                                    totalSteps: 100,
                                    currentStep: 72,
                                    selectedColor: Colors.blueGrey,
                                    unselectedColor: Colors.grey[200],
                                    padding: 0,
                                    height: MediaQuery.of(context).size.height *
                                        .09,
                                    width: MediaQuery.of(context).size.height *
                                        .09,
                                    child: Center(
                                      child: Text(
                                        "1586",
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 15,
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              )
                            ],
                          ),
                          SizedBox(
                            height: 20,
                          ),
                          Center(
                            child: GestureDetector(
                              onTap: () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (BuildContext context) {
                                    return DailyNutritionScreen();
                                  }),
                                );
                              },
                              child: Text(
                                "See Overall Progress",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 15,
                                ),
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
                          fontSize: 25,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      Container(
                        constraints: BoxConstraints.expand(
                          height: 200.0,
                        ),
                        alignment: Alignment.bottomLeft,
                        padding: EdgeInsets.only(left: 16.0, bottom: 8.0),
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: AssetImage('assets/today-workout.png'),
                            fit: BoxFit.cover,
                          ),
                        ),
                        child: Text(
                          'Biceps & Abs - 30 mins',
                          style: new TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 20.0,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
