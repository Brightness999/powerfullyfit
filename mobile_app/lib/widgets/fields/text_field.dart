import 'package:flutter/material.dart';

class AppTextField extends StatefulWidget {
  @override
  _AppTextField createState() => _AppTextField();
}

class _AppTextField extends State<AppTextField> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      validator: (value) {
        if (value.isEmpty) {
          return 'Please enter some text';
        }
        return null;
      },
    );
  }
}
