import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/theme/colors.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]).then((_) {
    runApp(MyApp());
  });
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Powerfully Fit',
      theme: ThemeData(
        // primarySwatch: Colors.grey,
        appBarTheme: AppBarTheme(
          color: appGrey,
        ),
        scaffoldBackgroundColor: appGrey,
        textTheme: Theme.of(context).textTheme.apply(
              bodyColor: Colors.white,
              displayColor: Colors.white,
            ),
        primaryIconTheme:
            Theme.of(context).primaryIconTheme.copyWith(color: Colors.white),
        primaryTextTheme: TextTheme(
          headline6: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 30.0,
          ),
        ),
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return LoginScreen();
  }
}
