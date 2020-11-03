import 'dart:async';

import 'package:flutter/material.dart';

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
        color: Colors.green,
      ),
      height: (MediaQuery.of(context).size.height / 100) * 10,
      width: (MediaQuery.of(context).size.width / 100) * 24,
      child: FlatButton(
        onPressed: onPressed,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Icon(
                icon,
                size: 30.0,
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
