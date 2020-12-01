import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:mobile_app/widgets/cards/settings-option.card.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class MacrosListScreen extends StatefulWidget {
  @override
  _MacrosListScreen createState() => _MacrosListScreen();
}

class _MacrosListScreen extends State<MacrosListScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: appGrey,
        title: Text(
          "Daily Nutrition",
          style: TextStyle(
            color: Colors.white,
            fontSize: 25,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * .02,
          ),
          child: Column(
            children: [
              DailyNutrition(),
              SizedBox(
                height: 30,
              ),
              PrimaryButton(
                child: Center(
                  child: Text(
                    'Enter Macros',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 28,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
              SizedBox(height: 30),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Recent Entries",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              SettingsOptionCard(
                child: Text("Tue. - Leg"),
              ),
              SettingsOptionCard(
                child: Text("Wed. - Triceps & Shoulders"),
              ),
              SettingsOptionCard(
                child: Text("Thur. - Back"),
              ),
              SettingsOptionCard(
                child: Text("Fri. - Core & Glutes"),
              ),
              SettingsOptionCard(
                child: Text("Fri. - Core & Glutes"),
              ),
              SettingsOptionCard(
                child: Text("Fri. - Core & Glutes"),
              ),
              SettingsOptionCard(
                child: Text("Fri. - Core & Glutes"),
              ),
              SizedBox(
                height: 20,
              )
            ],
          ),
        ),
      ),
    );
  }
}
