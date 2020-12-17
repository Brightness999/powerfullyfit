import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class PrimaryButton extends StatelessWidget {
  final Widget child;
  final Function onPressed;
  final bool disabled;
  final EdgeInsets margin;

  PrimaryButton(
      {this.child, this.onPressed, this.disabled = false, this.margin});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      margin: margin,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.all(
          Radius.circular(25),
        ),
        gradient: LinearGradient(
          colors: <Color>[
            Color(0xff99755A),
            Color(0xffE3B787),
          ],
        ),
      ),
      child: RawMaterialButton(
        padding: EdgeInsets.all(
          MediaQuery.of(context).size.height * .01,
        ),
        shape: new RoundedRectangleBorder(
          borderRadius: new BorderRadius.circular(
            25.0,
          ),
        ),
        onPressed: onPressed,
        child: child,
      ),
    );
  }
}
