import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_app/app_config.dart';

import 'package:mobile_app/screens/auth/login/login_ui.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/wrapper/app-wrapper.dart';

void main({String env}) async {
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
        appBarTheme: AppBarTheme(
          color: grey,
          elevation: 0.0,
          textTheme: TextTheme(
            headline6: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 20.0,
            ),
          ),
        ),
        scaffoldBackgroundColor: grey,
        textTheme: Theme.of(context).textTheme.apply(
              bodyColor: Colors.white,
              displayColor: Colors.white,
            ),
        primaryIconTheme: IconThemeData(
          color: Colors.white,
        ),
        primaryTextTheme: TextTheme(
          headline6: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 30.0,
          ),
        ),
        accentColor: Colors.white,
        unselectedWidgetColor: Colors.white,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: LoginScreen(),
    );
  }
}
