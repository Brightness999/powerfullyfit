import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_events.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';
import 'login_bloc.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';

class LoginScreen extends StatelessWidget {
  final snackBar = SnackBar(content: Text('Yay! A SnackBar!'));

  final LoginBloc loginBloc = new LoginBloc();

  @override
  Widget build(BuildContext context) {
    final _formKey = GlobalKey<FormState>();

    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // AppTextField(),
          StreamBuilder<LoginEvent>(
            stream: loginBloc.stateStream,
            initialData: LoginEvent.LoginError,
            builder: (context, snapshot) {
              if (snapshot.data == LoginEvent.LoginLoading) {
                print('loading');
                // Scaffold.of(context).showSnackBar(snackBar);
              }

              return Center(
                child: Text('Login'),
              );
            },
          ),
        ],
      ),
    );
  }
}
