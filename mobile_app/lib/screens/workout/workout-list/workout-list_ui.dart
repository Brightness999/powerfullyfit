import 'package:flutter/material.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:table_calendar/table_calendar.dart';

class WorkoutListScreen extends StatefulWidget {
  _WorkoutListScreen createState() => _WorkoutListScreen();
}

class _WorkoutListScreen extends State<WorkoutListScreen> {
  CalendarController _calendarController = CalendarController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        title: Text("My Workouts"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              margin: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * .03,
              ),
              padding: EdgeInsets.all(
                MediaQuery.of(context).size.height * .02,
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
                margin: EdgeInsets.all(
                  MediaQuery.of(context).size.height * .01,
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
    );
  }
}
