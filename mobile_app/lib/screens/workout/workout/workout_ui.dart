import 'package:flutter/material.dart';

class WorkoutScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Workout Screen'),
      ),
      body: Center(
        child: Text('a workout has many exercises'),
      ),
    );
  }
}
