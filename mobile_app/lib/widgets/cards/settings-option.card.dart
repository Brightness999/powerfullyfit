import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';

class SettingsOptionCard extends StatelessWidget {
  final Widget child;
  final String label;
  final Function onTap;

  SettingsOptionCard({this.child, this.label = "", this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: EdgeInsets.symmetric(vertical: 5.0),
        padding: EdgeInsets.all(5),
        decoration: BoxDecoration(
          color: appDarkGrey,
          borderRadius: BorderRadius.all(
            Radius.circular(15),
          ),
        ),
        child: ListTile(
          onTap: onTap,
          tileColor: appDarkGrey,
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              child,
              if (label != null && label.isNotEmpty)
                Container(
                  padding: EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Color(0xff000000),
                    borderRadius: BorderRadius.all(
                      Radius.circular(5),
                    ),
                  ),
                  child: Text(
                    label,
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
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
