import 'package:flutter/material.dart';

class TodayWorkoutCard extends StatelessWidget {
  final String title;
  final Function onTap;

  TodayWorkoutCard({this.title, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
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
                height: MediaQuery.of(context).size.height * .20,
              ),
              alignment: Alignment.bottomLeft,
              padding: EdgeInsets.only(left: 16.0, bottom: 8.0),
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/today-workout.png'),
                  fit: BoxFit.cover,
                ),
              ),
              child: Container(
                decoration: BoxDecoration(
                  color: Color(0xff22272c),
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
            )
          ],
        ),
      ),
    );
  }
}
