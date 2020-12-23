import 'package:flutter/material.dart';

class AppWrapper extends InheritedWidget {
  final Widget child;

  AppWrapper({this.child});

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static AppWrapper of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType(aspect: AppWrapper);
  }
}
