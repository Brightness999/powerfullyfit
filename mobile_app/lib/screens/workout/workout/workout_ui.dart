import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';

class WorkoutScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Workout Screen'),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) {
                  return LoginScreen();
                }),
              );
            },
          )
        ],
      ),
      body: Container(
        margin: EdgeInsets.symmetric(
          vertical: MediaQuery.of(context).size.height * .05,
        ),
        child: Column(
          children: [
            Text(
              '',
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                FlatButton(
                  onPressed: () {},
                  color: Colors.brown,
                  child: Text(
                    'START',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                    ),
                  ),
                ),
                Text(
                  "0:00",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 38,
                  ),
                ),
              ],
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(
                  'exercises',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
