import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:math';
import 'package:mobile_app/screens/messaging/message/message_ui.dart';
import 'package:mobile_app/screens/nutrition/macros-list/macros-list.ui.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:vector_math/vector_math.dart' show radians;

class DailyNutritionScreen extends StatefulWidget {
  @override
  _DailyNutritionScreen createState() => _DailyNutritionScreen();
}

class _DailyNutritionScreen extends State {
  double width = 300.0;
  double height = 300.0;
  double maxHeight = 200.0;
  double maxWidth = 200.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          "Daily Nutrition",
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.height * .01,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(
                height: 30,
              ),
              Stack(
                alignment: Alignment.center,
                children: [
                  Center(
                    child: CircularStepProgressIndicator(
                      totalSteps: 100,
                      currentStep: 32,
                      stepSize: 9,
                      selectedColor: Colors.redAccent,
                      unselectedColor: Colors.grey[200],
                      padding: 0,
                      height: MediaQuery.of(context).size.height * .32,
                      width: MediaQuery.of(context).size.height * .32,
                      selectedStepSize:
                          MediaQuery.of(context).size.height * .025,
                      roundedCap: (_, __) => true,
                    ),
                  ),
                  _buildButton(
                    0,
                    color: Colors.greenAccent,
                    icon: FontAwesomeIcons.thumbtack,
                  ),
                  _buildButton(
                    pi * (2 / 3),
                    color: appBrown,
                    icon: FontAwesomeIcons.cat,
                  ),
                  _buildButton(
                    pi * (4 / 3),
                    color: Colors.blueAccent,
                    icon: FontAwesomeIcons.bolt,
                  ),
                  // ...omitted
                ],
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
                height: 15,
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
      ),
    );
  }

  _buildButton(double angle, {Color color, IconData icon}) {
    final double rad = radians(angle);
    return Transform(
      transform: Matrix4.identity()
        ..translate(
          1 * cos(rad),
          (1) * sin(rad),
        ),
      child: Transform.rotate(
        angle: angle,
        child: CircularStepProgressIndicator(
          totalSteps: 100,
          currentStep: 72,
          stepSize: 9,
          startingAngle: 0,
          arcSize: ((pi * ((2 / 3) * .93))),
          selectedColor: color,
          unselectedColor: Colors.grey[200],
          padding: 0,
          height: MediaQuery.of(context).size.height * .4,
          width: MediaQuery.of(context).size.height * .4,
          selectedStepSize: MediaQuery.of(context).size.height * .025,
          roundedCap: (_, __) => true,
        ),
      ),
    );
  }
}
