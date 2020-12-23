import 'package:flutter/material.dart';
import 'package:mobile_app/entities/workout.dart';
import 'package:mobile_app/models/workout-type.enum.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/calendar.card.dart';
import 'package:mobile_app/widgets/cards/settings-option.card.dart';
import 'package:mobile_app/widgets/cards/today-workout.card.dart';
import 'package:table_calendar/table_calendar.dart';

class WorkoutListScreen extends StatefulWidget {
  _WorkoutListScreen createState() => _WorkoutListScreen();
}

class _WorkoutListScreen extends State<WorkoutListScreen> {
  CalendarController calendarController = CalendarController();

  List<Workout> upcomingWorkouts = [
    Workout(name: "Leg", type: WorkoutType.HIIT),
    Workout(name: "Triceps & Shoulders"),
    Workout(name: "Back"),
    Workout(name: "Core & Glutes", type: WorkoutType.HIIT),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
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
              ...upcomingWorkouts.map((Workout workout) {
                return SettingsOptionCard(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (BuildContext context) {
                        return WorkoutScreen();
                      }),
                    );
                  },
                  child: Row(
                    children: [
                      Text(
                        "Tue.",
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(" - ${workout.name}"),
                      if (workout.type != null)
                        Container(
                          padding: EdgeInsets.all(8),
                          margin: EdgeInsets.only(left: 13),
                          decoration: BoxDecoration(
                            color: Color(0xff000000),
                            borderRadius: BorderRadius.all(
                              Radius.circular(5),
                            ),
                          ),
                          child: Text(
                            "HIIT",
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                    ],
                  ),
                );
              }).toList()
            ],
          ),
        ),
      ),
    );
  }
}
