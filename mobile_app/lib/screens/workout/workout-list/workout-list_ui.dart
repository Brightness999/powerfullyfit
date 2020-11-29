import 'package:flutter/material.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/cards/calendar.card.dart';
import 'package:mobile_app/widgets/cards/settings-option.card.dart';
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
        title: Text(
          "My Workouts",
          style: new TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 26.0,
            color: Colors.white,
          ),
        ),
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
              SizedBox(height: 20),
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
              SizedBox(height: 30),
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
              ),
              SizedBox(
                height: 10,
              ),
              SettingsOptionCard(
                title: "Tue. - Leg",
                label: "HIIT",
              ),
              SettingsOptionCard(
                title: "Wed. - Triceps & Shoulders",
                label: "",
              ),
              SettingsOptionCard(
                title: "Thur. - Back",
                label: "",
              ),
              SettingsOptionCard(
                title: "Fri. - Core & Glutes",
                label: "HIIT",
              ),
            ],
          ),
        ),
      ),
    );
  }
}
