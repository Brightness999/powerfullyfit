import 'package:flutter/material.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/cards/calendar.card.dart';
import 'package:mobile_app/widgets/cards/today-workout.card.dart';
import 'package:table_calendar/table_calendar.dart';

class WorkoutListScreen extends StatefulWidget {
  _WorkoutListScreen createState() => _WorkoutListScreen();
}

class _WorkoutListScreen extends State<WorkoutListScreen> {
  CalendarController calendarController = CalendarController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text("My Workouts"),
      ),
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            vertical: MediaQuery.of(context).size.height * .01,
            horizontal: MediaQuery.of(context).size.width * .03,
          ),
          child: Column(
            children: [
              CalendarCard(calendarController: calendarController),
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
              SizedBox(height: 20),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Upcoming Workouts",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
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
