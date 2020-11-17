import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_ui.dart';
import 'package:mobile_app/screens/auth/login/login_events.dart';
import 'package:mobile_app/screens/home/home_screen.ui.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';
import 'login_bloc.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';

class LoginScreen extends StatelessWidget {
  final snackBar = SnackBar(content: Text('Yay! A SnackBar!'));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints viewportConstraints) {
        return SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                margin: EdgeInsets.symmetric(
                  vertical: MediaQuery.of(context).size.height * .1,
                  horizontal: MediaQuery.of(context).size.width * .15,
                ),
                child: Image.asset(
                  'assets/logo.png',
                  width: MediaQuery.of(context).size.width * .9,
                  // scale: 0.8,
                  // fit: BoxFit.,
                ),
              ),
              Container(
                margin: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width * .1,
                  vertical: MediaQuery.of(context).size.width * .1,
                ),
                child: TextField(
                  decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      border: InputBorder.none,
                      hintText: 'Email'),
                ),
              ),
              Container(
                margin: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width * .1,
                ),
                child: TextField(
                  decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      border: InputBorder.none,
                      hintText: 'Password'),
                  obscureText: true,
                ),
              ),
              Container(
                margin: EdgeInsets.symmetric(
                  vertical: MediaQuery.of(context).size.width * .15,
                ),
                child: FlatButton(
                  color: Colors.brown,
                  onPressed: () {
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (BuildContext context) {
                        return HomeScreen();
                      }),
                    );
                  },
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius:
                          BorderRadius.all(Radius.circular(10)), //here
                    ),
                    margin: EdgeInsets.symmetric(
                      vertical: MediaQuery.of(context).size.width * .05,
                    ),
                    width: MediaQuery.of(context).size.width * .7,
                    child: Center(
                      child: Text(
                        'LOG IN',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                        ),
                      ),
                    ),
                  ),
                ),
              )
            ],
          ),
        );
      }),
    );
  }
}
