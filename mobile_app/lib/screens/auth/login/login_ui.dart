import 'package:flutter/material.dart';
import 'package:mobile_app/constants/app-images.dart';
import 'package:mobile_app/entities/client.entity.dart';
import 'package:mobile_app/models/login.model.dart';
import 'package:mobile_app/repositories/auth.repostory.dart';
import 'package:mobile_app/screens/auth/forgot-password/forgot_password.dart';
import 'package:mobile_app/screens/auth/login/login_bloc.dart';
import 'package:mobile_app/screens/home/home_screen.ui.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';
import 'package:mobile_app/widgets/wrapper/app-wrapper.dart';

import 'login_events.dart';

class LoginScreen extends StatelessWidget {
  final snackBar = SnackBar(content: Text('There was a problem'));

  final LoginBloc loginBloc = LoginBloc();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints viewportConstraints) {
          return GestureDetector(
            onTap: () => FocusScope.of(context).unfocus(),
            child: SingleChildScrollView(
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
                        AppImages.logo,
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
                          StreamBuilder(
                            stream: loginBloc.stateStream,
                            builder: (context, AsyncSnapshot<LoginEvent> data) {
                              return AppTextField(
                                hintText: 'Password',
                                suffixIcon: GestureDetector(
                                  onTap: () {
                                    data.data == LoginEvent.ShowPassword
                                        ? loginBloc.eventSink
                                            .add(LoginEvent.HidePassword)
                                        : loginBloc.eventSink
                                            .add(LoginEvent.ShowPassword);
                                  },
                                  child: Icon(
                                    data.data == LoginEvent.ShowPassword
                                        ? Icons.visibility
                                        : Icons.visibility_off,
                                    color: data.data == LoginEvent.ShowPassword
                                        ? Colors.blueAccent
                                        : Colors.grey,
                                  ),
                                ),
                                obscureText:
                                    data.data != LoginEvent.ShowPassword,
                              );
                            },
                          ),
                          PrimaryButton(
                            margin: EdgeInsets.symmetric(
                              vertical: 20,
                            ),
                            onPressed: () {
                              // Scaffold.of(context).showSnackBar(
                              //   snackBar,
                              // );

                              // AuthRepository.login(
                              //   Login(
                              //     username: 'test (edit)',
                              //     password: 'a',
                              //   ),
                              // ).listen((Client user) {
                              Navigator.pushReplacement(
                                context,
                                MaterialPageRoute(
                                    builder: (BuildContext context) {
                                  return HomeScreen();
                                }),
                              );
                              // });
                            },
                            child: Center(
                              child: Text(
                                'LOG IN',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 28,
                                  // fontFamily: 'Gotham-Black',
                                ),
                              ),
                            ),
                          ),
                          Center(
                            child: InkWell(
                              child: new Text(
                                'Forgot Password',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 20,
                                  decoration: TextDecoration.underline,
                                ),
                              ),
                              onTap: () {
                                // displayDeleteAccountBottomSheet(context);
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (BuildContext context) {
                                    return ForgotPasswordScreen();
                                  }),
                                );
                              },
                            ),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
