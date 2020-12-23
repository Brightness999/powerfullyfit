import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class WorkoutTimer extends StatefulWidget {
  @override
  _WorkoutTimer createState() => _WorkoutTimer();
}

class _WorkoutTimer extends State<WorkoutTimer> {
  static const duration = const Duration(seconds: 1);

  int secondsPassed = 0;
  bool isActive = false;

  Timer timer;

  void handleTick() {
    if (mounted) {
      if (isActive) {
        setState(() {
          secondsPassed = secondsPassed + 1;
        });
      }
    }
  }

  void resetTimer() {
    if (mounted) {
      setState(() {
        secondsPassed = 0;
      });
    }
  }

  @override
  void dispose() {
    this.timer = null;

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (timer == null)
      timer = Timer.periodic(duration, (Timer t) {
        handleTick();
      });

    int seconds = secondsPassed % 60;
    int minutes = secondsPassed ~/ 60;
    int hours = secondsPassed ~/ (60 * 60);

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        FlatButton(
          onPressed: () {
            setState(() {
              isActive = !isActive;
            });
          },
          color: darkGrey,
          textColor: Colors.white,
          child: Text(
            isActive ? "STOP" : "START",
            style: new TextStyle(
              fontSize: 25.0,
              color: Colors.white,
            ),
          ),
          padding: EdgeInsets.all(36),
          shape: CircleBorder(
            side: BorderSide(
              color: isActive ? Colors.redAccent : Colors.greenAccent,
            ),
          ),
        ),
        SizedBox(width: 15),
        Text(
          minutes.toString().padLeft(2, '0') +
              ":" +
              seconds.toString().padLeft(2, '0'),
          style: new TextStyle(
            fontSize: 73.0,
          ),
        ),
      ],
    );
  }
}
