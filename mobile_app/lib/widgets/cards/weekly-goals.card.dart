import 'package:flutter/material.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';

import 'package:step_progress_indicator/step_progress_indicator.dart';

class WeeklyGoals extends StatefulWidget {
  @override
  _WeeklyGoals createState() => _WeeklyGoals();
}

class _WeeklyGoals extends State<WeeklyGoals> {
  @override
  Widget build(BuildContext context) {
    return PrimaryCard(
      title: "My Weekly Goals",
      child: Container(
        padding: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Weekly Workouts (2/4)",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 17,
                  ),
                ),
                Icon(
                  Icons.keyboard_arrow_down,
                  color: Colors.white,
                )
              ],
            ),
            Container(
              margin: EdgeInsets.only(
                top: MediaQuery.of(context).size.height * .01,
              ),
              child: StepProgressIndicator(
                totalSteps: 4,
                currentStep: 2,
                size: 36,
                selectedColor: Colors.black,
                unselectedColor: Colors.grey[200],
                customStep: (index, color, _) => color == Colors.black
                    ? Container(
                        child: Icon(
                          Icons.check_circle,
                          color: Colors.greenAccent,
                        ),
                      )
                    : Container(
                        margin: EdgeInsets.all(10.0),
                        width: 300.0,
                        height: 300.0,
                        decoration: BoxDecoration(
                            color: Colors.orange, shape: BoxShape.circle),
                      ),
              ),
            ),
            Text(
              "Macros milestone reached (4/5)",
              style: TextStyle(
                color: Colors.white,
                fontSize: 17,
              ),
            ),
            Container(
              margin: EdgeInsets.only(
                top: MediaQuery.of(context).size.height * .02,
              ),
              child: StepProgressIndicator(
                totalSteps: 5,
                currentStep: 4,
                size: 36,
                selectedColor: Colors.black,
                unselectedColor: Colors.grey[200],
                customStep: (index, color, _) => color == Colors.black
                    ? Container(
                        child: Icon(
                          Icons.check_circle,
                          color: Colors.greenAccent,
                        ),
                      )
                    : Container(
                        child: Icon(
                          Icons.stop_circle,
                          color: Colors.blueAccent,
                        ),
                      ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
