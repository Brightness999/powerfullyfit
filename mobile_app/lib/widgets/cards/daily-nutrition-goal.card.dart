import 'package:flutter/material.dart';
import 'package:mobile_app/models/nutrition-day.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

class DailyNutrition extends StatelessWidget {
  final String title;
  final Widget child;

  NutritionDay nutritionDay = NutritionDay(
    currentCalories: 1789,
    caloryGoal: 2000,
    currentProtein: 789,
    proteinGoal: 2000,
    currentCarbs: 1589,
    carbsGoal: 2000,
    currentFats: 1089,
    fatGoal: 2000,
  );

  DailyNutrition({this.title, this.child});

  @override
  Widget build(BuildContext context) {
    return PrimaryCard(
      title: title,
      child: Container(
        padding: EdgeInsets.all(15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              "Your Daily Nutrition Goal",
              style: TextStyle(
                color: Colors.white,
                fontSize: 19,
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Column(
                  children: [
                    Text(
                      "Calories",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 15,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    _buildProgressCircle(
                      context,
                      color: pink,
                      currentSteps: nutritionDay.currentCalories,
                      totalSteps: nutritionDay.caloryGoal,
                    )
                  ],
                ),
                Column(
                  children: [
                    Text(
                      "Protein",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 15,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    _buildProgressCircle(
                      context,
                      color: green,
                      currentSteps: nutritionDay.currentProtein,
                      totalSteps: nutritionDay.proteinGoal,
                    )
                  ],
                ),
                Column(
                  children: [
                    Text(
                      "Carbs",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 15,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    _buildProgressCircle(
                      context,
                      color: lightBrown,
                      currentSteps: nutritionDay.currentCarbs,
                      totalSteps: nutritionDay.caloryGoal,
                    )
                  ],
                ),
                Column(
                  children: [
                    Text(
                      "Fat",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 15,
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    _buildProgressCircle(
                      context,
                      color: blue,
                      currentSteps: nutritionDay.currentFats,
                      totalSteps: nutritionDay.fatGoal,
                    )
                  ],
                )
              ],
            ),
            if (child != null) child
          ],
        ),
      ),
    );
  }

  Widget _buildProgressCircle(context,
      {Color color = Colors.grey,
      int totalSteps = 100,
      int currentSteps = 33}) {
    return CircularStepProgressIndicator(
      totalSteps: totalSteps,
      currentStep: currentSteps,
      selectedColor: color,
      unselectedColor: Colors.grey[200],
      height: MediaQuery.of(context).size.height * .07,
      width: MediaQuery.of(context).size.height * .07,
      child: Center(
        child: Text(
          currentSteps.toString(),
          style: TextStyle(
            color: Colors.white,
            fontSize: 15,
          ),
        ),
      ),
    );
  }
}
