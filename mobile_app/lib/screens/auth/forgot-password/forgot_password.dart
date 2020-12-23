import 'package:flutter/material.dart';
import 'package:mobile_app/screens/home/home_screen.ui.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';

class ForgotPasswordScreen extends StatelessWidget {
  final snackBar = SnackBar(content: Text('Yay! A SnackBar!'));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints viewportConstraints) {
          return SingleChildScrollView(
            child: Container(
              height: MediaQuery.of(context).size.height * .9,
              margin: EdgeInsets.symmetric(
                vertical: MediaQuery.of(context).size.height * .1,
                horizontal: MediaQuery.of(context).size.width * .05,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    child: Image.asset(
                      'assets/logo.png',
                      width: MediaQuery.of(context).size.width,
                    ),
                  ),
                  Container(
                    height: MediaQuery.of(context).size.height * .4,
                    child: Column(
                      children: [
                        AppTextField(
                          hintText: 'Email',
                        ),
                        PrimaryButton(
                          onPressed: () {
                            Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (BuildContext context) {
                                return HomeScreen();
                              }),
                            );
                          },
                          child: Center(
                            child: Text(
                              'Recover Password',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 28,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
