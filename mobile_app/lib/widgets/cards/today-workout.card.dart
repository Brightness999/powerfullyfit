import 'package:flutter/material.dart';
import 'package:mobile_app/entities/workout.dart';

class TodayWorkoutCard extends StatelessWidget {
  final String title = "Today's Workout";
  final Function onTap;

  Workout todaysWorkout = Workout(name: 'Biceps & Abs', duration: '30 mins');

  TodayWorkoutCard({this.onTap});

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
                title,
                style: TextStyle(
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
                  image: AssetImage(
                    todaysWorkout.picture,
                  ),
                  fit: BoxFit.cover,
                  colorFilter: ColorFilter.mode(
                    Colors.grey[350],
                    BlendMode.multiply,
                  ),
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
                  color: Color(0xbb22272c),
                  border: Border.all(
                    color: Color(0xff22272c),
                    width: 2,
                  ),
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(25),
                    bottomRight: Radius.circular(25),
                  ),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Text(
                          todaysWorkout.name,
                          style: new TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 24.0,
                          ),
                        ),
                        Text(
                          ' - ',
                          style: new TextStyle(
                            fontSize: 24.0,
                          ),
                        ),
                        Text(
                          todaysWorkout.duration,
                          style: new TextStyle(
                            fontSize: 24.0,
                          ),
                        ),
                      ],
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
