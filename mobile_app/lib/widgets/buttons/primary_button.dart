import 'package:flutter/material.dart';

class PrimaryButton extends StatefulWidget {
  final Widget content;
  final Function onPressed;

  PrimaryButton({this.content, this.onPressed});

  @override
  _PrimaryButton createState() => _PrimaryButton(content, onPressed);
}

class _PrimaryButton extends State<PrimaryButton> {
  Widget _content;
  Function _onPressed;

  _PrimaryButton(this._content, this._onPressed);

  @override
  Widget build(BuildContext context) {
    return FlatButton(onPressed: this._onPressed, child: this._content);
  }
}
