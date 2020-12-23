import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/messaging/chat-list/chat-list_ui.dart';
import 'package:mobile_app/screens/progress/overall-progress/overall_progress_screen.ui.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';
import 'package:mobile_app/screens/home/home_screen.bloc.dart';
import 'package:mobile_app/screens/workout/workout-list/workout-list_ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/fields/text_field.dart';
import 'package:mobile_app/widgets/menu/menu.dart';

class HelpScreen extends StatefulWidget {
  @override
  _Helpcreen createState() => _Helpcreen();
}

class _Helpcreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          'Help',
          // style: new TextStyle(
          //   fontWeight: FontWeight.bold,
          //   fontSize: 26.0,
          //   color: Colors.white,
          // ),
        ),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          children: [
            Text(
              "Do you have any questions, concerns or requests? Please let us know here.",
            ),
            SizedBox(
              height: 20,
            ),
            AppTextField(
              hintText: 'Name',
            ),
            AppTextField(
              hintText: 'Email',
            ),
            AppTextField(
              hintText: 'What do you need help with?',
            ),
            AppTextField(
              hintText: 'Message',
            ),
            PrimaryButton(
              onPressed: () {
                // Navigator.pushReplacement(
                //   context,
                //   MaterialPageRoute(
                //       builder: (BuildContext context) {
                //     return HomeScreen();
                //   }),
                // );
              },
              child: Center(
                child: Text(
                  'SEND',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
