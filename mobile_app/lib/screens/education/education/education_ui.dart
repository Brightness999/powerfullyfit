import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/workout/workout-list/workout-list_ui.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';

class EducationScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          'Education Screen',
          style: TextStyle(
            color: Colors.white,
          ),
        ),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(
          horizontal: MediaQuery.of(context).size.height * .01,
          vertical: MediaQuery.of(context).size.width * .05,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (BuildContext context) {
                    return WorkoutListScreen();
                  }),
                );
              },
              child: Container(
                margin: EdgeInsets.only(
                  bottom: MediaQuery.of(context).size.height * .02,
                ),
                padding: EdgeInsets.all(
                  MediaQuery.of(context).size.height * .02,
                ),
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height * .18,
                decoration: BoxDecoration(
                  color: lightBrown,
                  borderRadius: BorderRadius.all(
                    Radius.circular(25),
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Icon(
                      Icons.fitness_center,
                      color: Colors.white,
                    ),
                    Text(
                      "Workouts & Exercises",
                      style: TextStyle(
                        fontSize: 28,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "14 posts in this collection",
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                    Text(
                      "Posted By Sam Davis",
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              padding: EdgeInsets.all(
                MediaQuery.of(context).size.height * .02,
              ),
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height * .18,
              decoration: BoxDecoration(
                color: lightBrown,
                borderRadius: BorderRadius.all(
                  Radius.circular(25),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Icon(
                    Icons.smartphone_rounded,
                    color: Colors.white,
                  ),
                  Text(
                    "App Navigation",
                    style: TextStyle(
                      fontSize: 28,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text(
                    "6 posts in this collection",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                  Text(
                    "Posted By Sam Davis",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
