import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class PrimaryButton extends StatelessWidget {
  final Widget child;
  final Function onPressed;
  final bool disabled;

  PrimaryButton({this.child, this.onPressed, this.disabled = false});

  @override
  Widget build(BuildContext context) {
    return FlatButton(
      shape: new RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(
          30.0,
        ),
      ),
      onPressed: onPressed,
      color: appBrown,
      child: Container(
        padding: EdgeInsets.all(
          MediaQuery.of(context).size.height * .02,
        ),
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.all(
            Radius.circular(25),
          ),
        ),
        child: child,
      ),
    );
  }
}
