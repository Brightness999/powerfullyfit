import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';

class WorkoutScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Workout'),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) {
                  return LoginScreen();
                }),
              );
            },
          )
        ],
      ),
      body: Center(
        child: Text('a workout has many exercises'),
      ),
    );
  }
}
