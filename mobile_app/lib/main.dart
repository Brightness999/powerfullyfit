import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobile_app/screens/auth/invitation/invitation_ui.dart';
import 'package:mobile_app/screens/community-board/board/board_ui.dart';
import 'package:mobile_app/screens/community-board/post/post_ui.dart';
import 'package:mobile_app/screens/education/education/education_ui.dart';
import 'package:mobile_app/screens/messaging/chat-list/chat-list_ui.dart';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/screens/user-management/edit-profile/edit-profile_ui.dart';
import 'package:mobile_app/screens/user-management/image-upload/image-upload_ui.dart';
import 'package:mobile_app/screens/user-management/user-screen/user-screen_ui.dart';
import 'package:mobile_app/screens/workout/exercise/exercise_ui.dart';
import 'package:mobile_app/screens/workout/program/program_ui.dart';
import 'package:mobile_app/screens/workout/workout/workout_ui.dart';
import 'package:mobile_app/widgets/menu/menu.dart';
import 'package:rxdart/rxdart.dart';

import 'screens/auth/login/login_ui.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'WL',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

enum menuState { IsOpen, IsClosed }

final BehaviorSubject<menuState> menuStream =
    new BehaviorSubject<menuState>.seeded(menuState.IsClosed);

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          ExerciseScreen(),
          StreamBuilder(
            stream: menuStream.stream,
            builder: (context, snapshot) {
              if (snapshot.data == menuState.IsClosed) return Container();

              return Container(
                alignment: Alignment.bottomCenter,
                padding: EdgeInsets.only(
                  bottom: 100,
                ),
                child: Container(
                  width: 450,
                  height: 450,
                  color: Colors.red,
                  child: Row(
                    children: [
                      FlatButton(onPressed: null, child: null),
                    ],
                  ),
                ),
              );
            },
          ),
        ],
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FlatButton(onPressed: null, child: null),
          FloatingActionButton(
            onPressed: _handleMenuState,
            child: StreamBuilder(
              stream: menuStream.stream,
              builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
                if (snapshot.data == menuState.IsClosed) return Icon(Icons.add);

                return Icon(Icons.remove);
              },
            ),
            backgroundColor: Colors.pink,
          ),
        ],
      ),
    );
  }

  _handleMenuState() {
    print(menuStream.value);

    if (menuStream.value == menuState.IsClosed)
      menuStream.add(menuState.IsOpen);
    else
      menuStream.add(menuState.IsClosed);
  }
}
