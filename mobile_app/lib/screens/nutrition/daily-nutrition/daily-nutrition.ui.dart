import 'package:flutter/material.dart';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/screens/nutrition/macros-list/macros-list.ui.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';

class DailyNutritionScreen extends StatefulWidget {
  @override
  _DailyNutritionScreen createState() => _DailyNutritionScreen();
}

class _DailyNutritionScreen extends State {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          "Daily Nutrition",
        ),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(
          horizontal: MediaQuery.of(context).size.height * .01,
        ),
        child: Column(
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
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Container(
                  child: Row(
                    children: [
                      Container(
                        color: Colors.redAccent,
                        height: MediaQuery.of(context).size.height * .01,
                        width: MediaQuery.of(context).size.height * .01,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text("Calories")
                    ],
                  ),
                ),
                Container(
                  child: Row(
                    children: [
                      Container(
                        color: Colors.greenAccent,
                        height: MediaQuery.of(context).size.height * .01,
                        width: MediaQuery.of(context).size.height * .01,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text("Protein")
                    ],
                  ),
                ),
                Container(
                  child: Row(
                    children: [
                      Container(
                        color: appBrown,
                        height: MediaQuery.of(context).size.height * .01,
                        width: MediaQuery.of(context).size.height * .01,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text("Carbs")
                    ],
                  ),
                ),
                Container(
                  child: Row(
                    children: [
                      Container(
                        color: Colors.blueAccent,
                        height: MediaQuery.of(context).size.height * .01,
                        width: MediaQuery.of(context).size.height * .01,
                      ),
                      SizedBox(
                        width: 5,
                      ),
                      Text("Fat")
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 30,
            ),
            DailyNutrition(),
            SizedBox(
              height: 30,
            ),
            PrimaryButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (BuildContext context) {
                    return MacrosListScreen();
                  }),
                );
              },
              child: Center(
                child: Text(
                  'Enter Macros',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
