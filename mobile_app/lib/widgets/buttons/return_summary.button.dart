import 'package:flutter/material.dart';
import 'package:mobile_app/screens/home/home_screen.state.dart';
import 'package:mobile_app/screens/home/home_screen.ui.dart';

class ReturnSummaryButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back_ios),
      onPressed: () {
        mainScreenBloc.stream.sink.add(screenState.Summary);
      },
    );
  }
}
