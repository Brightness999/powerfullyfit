import 'package:flutter/material.dart';

class PrimaryButton extends StatefulWidget {
  final Widget child;
  final Function onPressed;
  final bool disabled;

  PrimaryButton({this.child, this.onPressed, this.disabled});

  @override
  _PrimaryButton createState() => _PrimaryButton(child, onPressed, disabled);
}

class _PrimaryButton extends State<PrimaryButton> {
  Widget _content;
  Function _onPressed;
  bool disabled;

  _PrimaryButton(this._content, this._onPressed, this.disabled);

  @override
  Widget build(BuildContext context) {
    return FlatButton(
      onPressed: disabled ? null : this._onPressed,
      child: this._content,
    );
  }
}
