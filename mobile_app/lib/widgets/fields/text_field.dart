import 'package:flutter/material.dart';

class AppTextField extends StatelessWidget {
  final bool obscureText;
  final String hintText;
  final Widget suffixIcon;

  AppTextField({this.hintText, this.obscureText = false, this.suffixIcon});

  @override
  Widget build(BuildContext context) {
    return TextField(
      obscureText: obscureText,
      decoration: InputDecoration(
        labelText: hintText,
        labelStyle: TextStyle(
          fontSize: 20,
        ),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        filled: true,
        fillColor: Colors.white,
        hintText: hintText,
        suffixIcon: suffixIcon,
      ),
    );
  }
}
