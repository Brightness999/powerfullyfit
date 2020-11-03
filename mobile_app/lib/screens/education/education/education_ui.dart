import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';

class EducationScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Education Screen'),
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
      body: Center(
        child: Text('Education'),
      ),
    );
  }
}
