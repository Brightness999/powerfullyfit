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
            Container(
              margin: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * .01,
              ),
              child: Text(
                "Today's Workout",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 25,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Container(
              constraints: BoxConstraints.expand(
                height: MediaQuery.of(context).size.height * .25,
              ),
              alignment: Alignment.bottomLeft,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(
                  Radius.circular(25),
                ),
                image: DecorationImage(
                  image: AssetImage('assets/today-workout.png'),
                  fit: BoxFit.cover,
                ),
              ),
              child: Container(
                width: MediaQuery.of(context).size.width,
                padding: EdgeInsets.only(
                  left: 16.0,
                  bottom: 8.0,
                  top: 8.0,
                  right: 10.0,
                ),
                decoration: BoxDecoration(
                  color: Color(0xdd22272c),
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(25),
                    bottomRight: Radius.circular(25),
                  ),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Biceps & Abs - 30 mins',
                      style: new TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 24.0,
                        color: Colors.white,
                      ),
                    ),
                    Icon(
                      Icons.chevron_right,
                      color: Colors.white,
                      size: 24.0,
                    )
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
