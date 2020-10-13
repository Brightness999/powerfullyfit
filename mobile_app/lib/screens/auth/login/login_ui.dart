import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_events.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';
import 'login_bloc.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';

class LoginScreen extends StatelessWidget {
  final snackBar = SnackBar(content: Text('Yay! A SnackBar!'));

  @override
  Widget build(BuildContext context) {
    LoginBloc loginBloc = new LoginBloc();

    final _formKey = GlobalKey<FormState>();

    return Form(
      key: _formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          AppTextField(),
          StreamBuilder<int>(
            stream: loginBloc.stateStream,
            initialData: 0,
            builder: (context, snapshot) {
              if (snapshot.hasError)
                Scaffold.of(context).showSnackBar(snackBar);

              return PrimaryButton(
                content: Text('button'),
                onPressed: () {
                  loginBloc.eventSink.add(LoginEvent.LoginLoading);
                },
              );
            },
          ),
        ],
      ),
    );
  }
}
