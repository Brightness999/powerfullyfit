import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class MenuItem extends StatelessWidget {
  final Function onPressed;
  final String name;
  final IconData icon;

  MenuItem({
    this.name,
    this.onPressed,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(
          Radius.circular(
            10,
          ),
        ),
        color: grey,
      ),
      height: (MediaQuery.of(context).size.height) * .12,
      width: (MediaQuery.of(context).size.width) * .25,
      child: FlatButton(
        onPressed: onPressed,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Icon(
                icon,
                size: 30.0,
                color: brown,
              ),
              Text(
                name,
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
