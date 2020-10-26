import 'package:flutter/material.dart';

class ProgramScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Program Screen'),
      ),
      body: Center(
        child: Text('a program has many workouts'),
      ),
    );
  }
}
