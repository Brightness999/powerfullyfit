import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class PrimaryCard extends StatelessWidget {
  final Widget child;
  final String title;

  PrimaryCard({this.title, this.child});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (title != null)
          Container(
            margin: EdgeInsets.only(
              bottom: MediaQuery.of(context).size.height * .01,
            ),
            child: Text(
              title,
              style: TextStyle(
                color: Colors.white,
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        Container(
          padding: EdgeInsets.all(
            MediaQuery.of(context).size.height * .01,
          ),
          decoration: BoxDecoration(
            color: appDarkGrey,
            borderRadius: BorderRadius.all(
              Radius.circular(25),
            ),
          ),
          child: child,
        ),
      ],
    );
  }
}
