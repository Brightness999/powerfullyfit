import 'package:flutter/material.dart';
import 'package:mobile_app/screens/home/home_screen.state.dart';
import 'package:mobile_app/screens/home/home_screen.ui.dart';
import 'package:mobile_app/screens/summary/summary_screen.ui.dart';

class ReturnSummaryButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<Object>(
        stream: mainScreenBloc.stream,
        builder: (context, snapshot) {
          print(snapshot.data);

          return IconButton(
            icon: Icon(Icons.arrow_back_ios),
            onPressed: () {
              if (Navigator.canPop(context))
                Navigator.pop(context);
              else
                mainScreenBloc.stream.sink.add(screenState.Summary);
            },
          );
        });
  }
}

class MyCustomRoute<T> extends MaterialPageRoute<T> {
  MyCustomRoute({WidgetBuilder builder, RouteSettings settings})
      : super(builder: builder, settings: settings);

  @override
  Widget buildTransitions(BuildContext context, Animation<double> animation,
      Animation<double> secondaryAnimation, Widget child) {
    var begin = Offset(-1.0, 0.0);
    var end = Offset.zero;
    var tween = Tween(begin: begin, end: end);
    var offsetAnimation = animation.drive(tween);

    return SlideTransition(position: offsetAnimation, child: child);
  }
}
