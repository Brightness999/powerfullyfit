import 'package:flutter/material.dart';

class AppTextField extends StatelessWidget {
  final bool obscureText;
  final String hintText;
  final Widget suffixIcon;
  final Widget prefixIcon;

  AppTextField(
      {this.hintText,
      this.obscureText = false,
      this.suffixIcon,
      this.prefixIcon});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(
        vertical: MediaQuery.of(context).size.height * .015,
      ),
      child: TextField(
        obscureText: obscureText,
        style: TextStyle(
          color: Colors.black,
        ),
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
          prefixIcon: prefixIcon,
        ),
      ),
    );
  }
}
