import 'dart:async';

import 'package:flutter/material.dart';

class MenuItem extends StatelessWidget {
  final Function onPressed;
  final String name;

  MenuItem({this.name, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green,
      height: (MediaQuery.of(context).size.height / 100) * 10,
      width: (MediaQuery.of(context).size.width / 100) * 20,
      child: FlatButton(
        onPressed: onPressed,
        child: Center(
          child: Text(
            name,
          ),
        ),
      ),
    );
  }
}
