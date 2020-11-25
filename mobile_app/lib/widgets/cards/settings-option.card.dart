import 'package:flutter/material.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class SettingsOptionCard extends StatelessWidget {
  final String title;
  final Function onTap;

  SettingsOptionCard({this.title, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 5.0),
        padding: EdgeInsets.all(5),
        decoration: BoxDecoration(
          color: Color(0xff22272c),
          borderRadius: BorderRadius.all(
            Radius.circular(15),
          ),
        ),
        child: ListTile(
          onTap: onTap,
          tileColor: Color(0xff22272c),
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              Icon(
                Icons.chevron_right,
                color: Colors.white,
              )
            ],
          ),
        ),
      ),
    );
  }
}
