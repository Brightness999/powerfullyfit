import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class DailyNutritionScreen extends StatefulWidget {
  @override
  _DailyNutritionScreen createState() => _DailyNutritionScreen();
}

class _DailyNutritionScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF3F3F3F),
        title: Text(
          "Daily Nutrition",
          style: TextStyle(
            color: Colors.white,
            fontSize: 25,
          ),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(
            height: 30,
          ),
          CircularStepProgressIndicator(
            totalSteps: 100,
            currentStep: 72,
            stepSize: 9,
            selectedColor: Colors.greenAccent,
            unselectedColor: Colors.grey[200],
            padding: 0,
            height: 300,
            width: 300,
            selectedStepSize: 20,
            roundedCap: (_, __) => true,
            child: Center(
              child: CircularStepProgressIndicator(
                totalSteps: 100,
                currentStep: 32,
                stepSize: 9,
                selectedColor: Colors.redAccent,
                unselectedColor: Colors.grey[200],
                padding: 0,
                height: 230,
                width: 230,
                selectedStepSize: 20,
                roundedCap: (_, __) => true,
              ),
            ),
          ),
          SizedBox(
            height: 30,
          ),
          DailyNutrition(),
          Container(
            padding: EdgeInsets.all(
              MediaQuery.of(context).size.height * .02,
            ),
            decoration: BoxDecoration(
              color: Color(0xff99755A),
              borderRadius: BorderRadius.all(
                Radius.circular(25),
              ),
            ),
            child: FlatButton(
              onPressed: () {},
              child: Text(
                "Enter New Macros",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 33,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
